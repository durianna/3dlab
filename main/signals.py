from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import CustomUser, TestResults, PracticeResult, LessonResult

@receiver(post_save, sender=CustomUser)
def create_user_related_models(sender, instance, created, **kwargs):
    if created:
        TestResults.objects.create(user=instance)
        PracticeResult.objects.create(user=instance)
        LessonResult.objects.create(user=instance)