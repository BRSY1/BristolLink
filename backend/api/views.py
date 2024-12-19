from django.contrib.auth.hashers import check_password
from django.core.mail import send_mail
from django.urls import reverse
from rest_framework import status
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

import re
import requests

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

        if not email or not email.endswith("@bristol.ac.uk"):
            return Response({"message": "Invalid email"}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            new_user = serializer.save()

            try:
                self.send_verification_email(new_user)
            except Exception as e:
                return Response({"message": f"Failed to send verification email: {e}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def send_verification_email(self, new_user):
        verification_url = self.request.build_absolute_uri(reverse("verify", args=[new_user.verification_code]))

        send_mail(
            subject="Verify your email for BristolLink",
            message="Click the link to verify your email: " + verification_url,
            from_email="tom.lam@odns.hk",
            recipient_list=[new_user.email]
        )


class EmailVerificationView(APIView):
    def get(self, request, code):
        try:
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
            
            elif not user.is_verfied:
                return Response({"message": "Email not verified"}, status=status.HTTP_400_BAD_REQUEST)
            
            token, created = Token.objects.get_or_create(user=user)
            return Response({"token": token.key, "message": "Email verified successfully"}, status=status.HTTP_200_OK)

        
        except User.DoesNotExist:
            return Response({"message": "Invalid credentials"}, status=status.HTTP_404_NOT_FOUND)
        

class SubmitCrushView(APIView):
    authentication_classes = [TokenAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        crush_email = request.data.get("crush_email")

        if not crush_email or not crush_email.endswith("@bristol.ac.uk"):
            return Response({"message": "Invalid email"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Create new crush object if it does not already exists in the database
        if Crush.objects.filter(submitter=user, crush_email=crush_email).exists():
            return Response({"message": "You have already submitted a crush for this user."}, status=status.HTTP_400_BAD_REQUEST)
        
        data = {
            "submitter": user,
            "crush_email": crush_email,
            "message": request.data.get("message"),
            "image": request.data.get("image")
        }
        serializer = CrushSerializer(data=data)

        if serializer.is_valid():
            serializer.save()

            # Send email to crush if they are not registered
            if not User.objects.filter(email=crush_email).exists():
                self.send_invitation_email(request, user, crush_email)

            return Response({"message": "Crush submitted successfully"}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def send_invitation_email(self, user, crush_email):
        masked_name = re.sub(r'\S', 'X', user.name)
        registration_url = self.request.build_absolute_uri(reverse("register"))
        message = f"{masked_name} has a crush on you! Click the link to register and see who it is: {registration_url}"
        send_mail(
            subject=f"{masked_name} has a crush on you! (from BristolLink)",
            message=message,
            from_email="tom.lam@odns.hk", 
            recipient_list=[crush_email]
        )
