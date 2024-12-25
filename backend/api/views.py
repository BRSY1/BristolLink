from django.contrib.auth.hashers import check_password
from django.core.mail import send_mail
from django.conf import settings
from django.shortcuts import render
from django.template.loader import render_to_string
from django.urls import reverse
from django.utils.html import strip_tags
from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import (
    User, 
    Crush,
    Match
)
from .serializers import (
    UserSerializer,
    CrushSerializer
)


# Create your views here.
class RegisterView(APIView):
    def post(self, request):    
        email = request.data.get("email")

        # Check if email is a valid Bristol email
        if not email or not email.endswith("@bristol.ac.uk"):
            return Response({"message": "Invalid email address"}, status=status.HTTP_400_BAD_REQUEST)
        
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

    def send_verification_email(self, new_user):
        verification_url = self.request.build_absolute_uri(reverse("verify", args=[new_user.verification_code]))

        context = {
            "recipient_name": new_user.username,
            "activation_link": verification_url
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
            user.is_verified = True
            user.save()
            token = Token.objects.create(user=user)
            return Response({"token": token.key, "message": "Email verified successfully"}, status=status.HTTP_200_OK)
        
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
                return Response({"message": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)
            
            elif not user.is_verified:
                return Response({"message": "Email not verified"}, status=status.HTTP_400_BAD_REQUEST)
            
            token, created = Token.objects.get_or_create(user=user)
            return Response({"token": token.key, "message": "Logged in successfully"}, status=status.HTTP_200_OK)

        
        except User.DoesNotExist:
            return Response({"message": "Invalid credentials"}, status=status.HTTP_404_NOT_FOUND)
        

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
            crush_email == user.email):
            return Response({"message": "Invalid email"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Create new crush object if the user has not already submitted a crush
        if Crush.objects.filter(submitter=user).exists():
            return Response({"message": "You have already submitted a crush"}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer = CrushSerializer(data={
            "submitter": user,
            "crush_name": request.data.get("crush_name"),
            "crush_email": crush_email,
            "message": request.data.get("message")
        })

        if serializer.is_valid():
            serializer.save()

            crush_count = Crush.objects.filter(crush_email=crush_email).count()

            # Send invitation email to crush if they are not registered
            if User.objects.filter(email=crush_email).exists():
                self.send_notification_email(crush_email, crush_count)
                # Check if there is a match
                self.check_if_match(user, crush_email)
            else:
                self.send_invitation_email(crush_email, crush_count)

            return Response({"message": "Crush submitted successfully"}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def send_notification_email(self, crush_email, crush_count):
        message = f"You just received a request. {crush_count} person has a crush on you!"
        send_mail(
            subject=f"Someone has a crush on you! (from BristolLink)",
            message=message,
            from_email=settings.Default_FROM_EMAIL, 
            recipient_list=[crush_email]
        )
    
    def send_invitation_email(self, crush_email, crush_count):
        registration_url = self.request.build_absolute_uri(reverse("register"))
        message = f"{crush_count} person has a crush on you! Click the link to register and see who it is: {registration_url}"
        send_mail(
            subject=f"Someone has a crush on you! (from BristolLink)",
            message=message,
            from_email=settings.DEFAULT_FROM_EMAIL, 
            recipient_list=[crush_email]
        )
    
    def check_if_match(self, user, crush_email):
        if Crush.objects.filter(submitter=crush_email, crush_email=user.email).exists():
            crush = User.objects.get(email=crush_email)
            Match.objects.create(user1=user, user2=crush)


class GetCrushView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        crush = Crush.objects.filter(submitter=request.user)
        serializer = CrushSerializer(crush, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


def test(request):
    return render(request, "invitation_email.html")