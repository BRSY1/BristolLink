from django.contrib.auth.hashers import check_password
from django.core.mail import send_mail
from django.conf import settings
from django.db.models import Q, F
from django.shortcuts import render
from django.template.loader import render_to_string
from django.templatetags.static import static
from django.urls import reverse
from django.utils.html import strip_tags
from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView


import re

from .models import (
    User, 
    Crush,
    Match,
    Notification,
    Blacklist
)
from .serializers import (
    UserSerializer,
    CrushSerializer,
    NotificationSerializer
)


# Create your views here.
class RegisterView(APIView):
    def post(self, request):    
        email = request.data.get("email")
        password = request.data.get("password")

        # Check if email is a valid Bristol email
        if (not email or 
            not email.endswith("@bristol.ac.uk") or
            Blacklist.objects.filter(email=email).exists()):
            return Response({"message": "Invalid email address"}, status=status.HTTP_400_BAD_REQUEST)
        
        user = User.objects.filter(email=email).first()
        if user:
            if user.is_verified:
                return Response({"message": "You have already registered an account."}, status=status.HTTP_400_BAD_REQUEST)
            user.delete()
        
        if not self.validate_password(password):
            return Response({"message": "Invalid password."}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            # Create user and send verification email
            new_user = serializer.save()

            try:
                self.send_verification_email(new_user)
            except Exception as e:
                new_user.delete()
                return Response({"message": f"Failed to send verification email. Please register your account again."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def validate_password(self, password):
        return (
            len(password) >= 8 and
            re.search(r"[a-z]", password) and
            re.search(r"[A-Z]", password) and
            re.search(r"\d", password) and 
            re.search(r"[!@#$%^&*]", password)
        )

    def send_verification_email(self, new_user):
        verification_url = f"{settings.FRONTEND_BASE_URL}/verify/{new_user.verification_code}"
        logo_url = self.request.build_absolute_uri(static("images/logo.png"))

        context = {
            "recipient_name": new_user.username,
            "activation_link": verification_url,
            "logo_url": logo_url,
            "support_email": f"mailto:{settings.EMAIL_HOST_USER}"
        }

        html_message = render_to_string("verification_email.html", context)
        plain_message = strip_tags(html_message)

        send_mail(
            subject="Verify your email for BristolLink",
            message=plain_message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[new_user.email],
            html_message=html_message
        )


class EmailVerificationView(APIView):
    def get(self, request, code):
        try:
            # Verify user and create token
            user = User.objects.get(verification_code=code)
            
            if user.is_verified:
                token = Token.objects.get(user__email=user.email)
            else:
                user.is_verified = True
                user.save()
                token = Token.objects.create(user=user)

            user_serializer = UserSerializer(user)

            return Response({"token": token.key, "message": "Email verified successfully", "user": user_serializer.data}, status=status.HTTP_200_OK)
        
        except User.DoesNotExist:
            return Response({"message": "Invalid verification code"}, status=status.HTTP_404_NOT_FOUND)


class LoginView(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        if not password or not email:
            return Response({"message": "Email and password are required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(email=email, is_verified=True)

            if not check_password(password, user.password):
                return Response({"message": "Invalid password"}, status=status.HTTP_400_BAD_REQUEST)
            
            token = Token.objects.get(user__email=user.email)
            user_serializer = UserSerializer(user)

            return Response({"token": token.key, "message": "Logged in successfully", "user": user_serializer.data}, status=status.HTTP_200_OK)

        except User.DoesNotExist:
            return Response({"message": "Could not find verified user"}, status=status.HTTP_404_NOT_FOUND)
        

class LogoutView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            # Delete user's token
            request.user.auth_token.delete()
            return Response({"message": "Logged out successfully"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"message": f"Failed to logout: {e}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class SubmitCrushView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        crush_email = request.data.get("crush_email")

        # Check if email is a valid Bristol email
        if (not crush_email or 
            not crush_email.endswith("@bristol.ac.uk") or
            crush_email == user.email or 
            Blacklist.objects.filter(email=crush_email).exists()):
            return Response({"message": "Invalid email"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Create new crush object if the user has not already submitted a crush
        if Crush.objects.filter(submitter__email=user.email).exists():
            return Response({"message": "You have already submitted a crush"}, status=status.HTTP_400_BAD_REQUEST)

        # Send rejection email to user immediately if their crush already has a match
        if Match.objects.filter(Q(user1__email=crush_email) | Q(user2__email=crush_email)).exists():
            Notification.objects.create(
                receiver_email=user.email,
                notification_type='rejection',
            )
            self.send_notification_email(
                mail_title="You just received an update on your submission", 
                mail_template="rejection_email.html", 
                crush_email=user.email,
                crush_name=user.username,
                user_name=request.data.get("crush_name")
            )
            return Response({"message": "Crush submitted"}, status=status.HTTP_200_OK)
        
        serializer = CrushSerializer(data={
            "submitter": user.email,
            "crush_name": request.data.get("crush_name"),
            "crush_email": crush_email,
            "message": request.data.get("message")
        })

        if serializer.is_valid():
            serializer.save()

            crush_count = Crush.objects.filter(crush_email=crush_email).count()

            # Send invitation email to crush if they are not registered
            if User.objects.filter(email=crush_email).exists():
                crush_name = User.objects.get(email=crush_email).username

                self.send_notification_email(
                    crush_name, crush_email, crush_count, "Someone has a crush on you!", "crush_email.html"
                )
                # Check if there is a match
                self.check_if_match(user, crush_email)
            else:
                self.send_notification_email(
                    "", crush_email, crush_count, "Invitation from BristolLink", "invitation_email.html"
                )

            return Response({"message": "Crush submitted successfully"}, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def send_notification_email(self, crush_name="", crush_email="", crush_count=0, mail_title="", mail_template="", user_name=""):
        registration_url = f"{settings.FRONTEND_BASE_URL}/register"
        home_url = f"{settings.FRONTEND_BASE_URL}/dashboard"
        about_url = f"{settings.FRONTEND_BASE_URL}/what-is-link"
        privacy_policy_url = f"{settings.FRONTEND_BASE_URL}/privacy-statement"
        resubmit_url = f"{settings.FRONTEND_BASE_URL}/submit"
        logo_url = self.request.build_absolute_uri(static("images/logo.png"))

        context = {
            "crush_count": crush_count,
            "registration_link": registration_url,
            "logo_url": logo_url,
            "home_url": home_url,
            "about_url": about_url,
            "privacy_policy_url":privacy_policy_url,
            "resubmit_url": resubmit_url,
            "user_name": user_name,
            "crush_name": crush_name,
            "support_email": f"mailto:{settings.EMAIL_HOST_USER}"
        }

        html_message = render_to_string(mail_template, context)
        plain_message = strip_tags(html_message)

        send_mail(
            subject=mail_title,
            message=plain_message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[crush_email],
            html_message=html_message
        )
    
    def check_if_match(self, user, crush_email):
        if Crush.objects.filter(submitter__email=crush_email, crush_email=user.email).exists():
            crush = User.objects.get(email=crush_email)
            Match.objects.create(user1=user, user2=crush)

            # Remove all other submissions to the matched user
            self.reject_other_submissions(user, crush)
            self.reject_other_submissions(crush, user)

    def reject_other_submissions(self, user, crush):
        for other in Crush.objects.filter(crush_email=user.email):
            if other.submitter.email != crush.email:
                self.send_notification_email(
                    mail_title="You just received an update on your submission", 
                    mail_template="rejection_email.html", 
                    crush_email=other.submitter.email,
                    crush_name=other.submitter.username,
                    user_name=user.username
                )
                Notification.objects.create(
                    receiver_email=other.submitter.email,
                    notification_type='rejection',
                )
                other.delete()

            
class GetCrushView(ListAPIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = CrushSerializer

    def get_queryset(self):
        return Crush.objects.filter(submitter__email=self.request.user.email)
    

class NotificationView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        marked_as_read = request.query_params.get("markedAsRead", "false") == "true"

        notifications = Notification.objects.filter(
            receiver_email=request.user.email
        ).order_by('-id')

        # Create notification objects
        serializer = NotificationSerializer(notifications, many=True)
        response = Response(serializer.data, status=status.HTTP_200_OK)

        # Update notifications to read before returning
        if marked_as_read:   
            notifications.update(is_read=True)

        return response
    

class GetMatchView(ListAPIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = CrushSerializer

    def get_queryset(self):
        user = self.request.user
        match = Match.objects.filter(Q(user1__email=user.email) | Q(user2__email=user.email)).first()
        
        if not match:
            return Crush.objects.none()
        
        other_user = match.user1 if user == match.user2 else match.user2
        crush = Crush.objects.filter(submitter__email=other_user.email, crush_email=user.email)

        return crush


def test(request):
    return render(request, "invitation_email.html")