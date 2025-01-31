from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings
from django.core.mail import send_mail
from django.utils.html import strip_tags
from django.template.loader import render_to_string

from .models import Crush, Match, Notification 


def send_match_email(user, crush):
    home_url = f"{settings.FRONTEND_BASE_URL}/dashboard"
    logo_url = f"{settings.FRONTEND_BASE_URL}/favicon.png"

    context = {
        "home_url": home_url,
        "logo_url": logo_url,
        "user_name": user.username,
        "matched_user": crush.username,
    }

    html_message = render_to_string("match_email.html", context)
    plain_message = strip_tags(html_message)

    send_mail(
        subject="You just got a match from BristolLink",
        message=plain_message,
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[user.email],
        html_message=html_message
    )


@receiver(post_save, sender=Crush)
def notify_crush_submission(sender, instance, created, **kwargs):
    if created:
        Notification.objects.create(
            submitter=instance.submitter,
            receiver_email=instance.crush_email,
            notification_type='submission',
            created_at=instance.created_at
        )


@receiver(post_save, sender=Match)
def notify_match(sender, instance, created, **kwargs):
    if created:
        # Notify user1
        Notification.objects.create(
            submitter=instance.user2,
            receiver_email=instance.user1.email,
            notification_type='match',
            created_at=instance.matched_at
        )
        # Notify user2
        Notification.objects.create(
            submitter=instance.user1,
            receiver_email=instance.user2.email,
            notification_type='match',
            created_at=instance.matched_at
        )

        send_match_email(instance.user1, instance.user2)
        send_match_email(instance.user2, instance.user1)