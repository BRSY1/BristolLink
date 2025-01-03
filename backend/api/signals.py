from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import Crush, Match, Notification 


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