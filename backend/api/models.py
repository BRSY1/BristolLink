from django.contrib.auth.models import AbstractUser
from django.db import models
import uuid

# Create your models here.
class User(AbstractUser):
    email = models.EmailField(max_length=254, primary_key=True)
    is_verified = models.BooleanField(default=False)
    verification_code = models.UUIDField(default=uuid.uuid4, editable=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        return self.email 


class Crush(models.Model):
    submitter = models.ForeignKey(
        User, 
        on_delete=models.CASCADE, 
        related_name='submitted_crushes', 
        to_field='email'
    )
    crush_name = models.CharField(
        max_length=50,
        help_text="The name of your crush"
    )
    crush_email = models.EmailField(
        max_length=254,
        help_text="The email of your crush"
    )
    message = models.TextField(
        blank=True,
        null=True,
        help_text="Optional message for your crush"
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ['submitter', 'crush_email']

    def __str__(self):
        return f"{self.submitter} -> {self.crush_email}"


class Match(models.Model):
    user1 = models.ForeignKey(
        User, 
        on_delete=models.CASCADE, 
        related_name='matches_as_first_user', 
        to_field='email'
    )
    user2 = models.ForeignKey(
        User, 
        on_delete=models.CASCADE, 
        related_name='matches_as_second_user', 
        to_field='email'
    )
    matched_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user1} <-> {self.user2}"
    

class Notification(models.Model):
    NOTIFICATION_TYPES = [
        ('submission', 'Crush Submission'),
        ('match', 'Match Found'),
    ]

    submitter = models.ForeignKey(
        User, 
        on_delete=models.CASCADE, 
        to_field='email'
    )
    receiver_email = models.EmailField(max_length=254)
    notification_type = models.CharField(
        max_length=25,
        choices=NOTIFICATION_TYPES,
    )
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.receiver} - {self.notification_type}"
