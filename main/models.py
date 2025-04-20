from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser
from django.conf import settings  # ВАЖНО: импортируем settings

class CustomUser(AbstractUser):
    ROLE_CHOICES = (
        ('student', 'Ученик'),
        ('teacher', 'Учитель'),
    )
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    group_name = models.CharField(max_length=50, blank=True, null=True)
    surname = models.CharField(max_length=50, blank=True, null=True, verbose_name='Фамилия')

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='customuser_set',  # Уникальное имя для связи
        blank=True
    )

    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='customuser_permissions',  # Уникальное имя для связи
        blank=True
    )

# Посты (блог или учебный материал)
class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

# Профиль пользователя (если он нужен)
class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    def __str__(self):
        return f'{self.user.username} Profile'

class TestResults(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    test1 = models.IntegerField(default=0)
    test2 = models.IntegerField(default=0)
    test3 = models.IntegerField(default=0)
    test4 = models.IntegerField(default=0)
    test5 = models.IntegerField(default=0)
    test6 = models.IntegerField(default=0)
    test7 = models.IntegerField(default=0)
    test8 = models.IntegerField(default=0)
    test9 = models.IntegerField(default=0)
    test10 = models.IntegerField(default=0)
    test11 = models.IntegerField(default=0)
    test12 = models.IntegerField(default=0)
    test13 = models.IntegerField(default=0)
    test14 = models.IntegerField(default=0)
    test15 = models.IntegerField(default=0)

    def __str__(self):
        return f"Test results for {self.user.username}"



class PracticeResult(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    practice1 = models.BooleanField(default=False)
    practice2 = models.BooleanField(default=False)
    practice3 = models.BooleanField(default=False)
    practice4 = models.BooleanField(default=False)
    practice5 = models.BooleanField(default=False)
    practice6 = models.BooleanField(default=False)
    practice7 = models.BooleanField(default=False)
    practice8 = models.BooleanField(default=False)
    practice9 = models.BooleanField(default=False)
    practice10 = models.BooleanField(default=False)
    practice11 = models.BooleanField(default=False)
    practice12 = models.BooleanField(default=False)
    practice13 = models.BooleanField(default=False)
    practice14 = models.BooleanField(default=False)
    practice15 = models.BooleanField(default=False)

    def __str__(self):
        return f"Practice results for {self.user.username}"

class LessonResult(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    lesson1 = models.BooleanField(default=False)
    lesson2 = models.BooleanField(default=False)
    lesson3 = models.BooleanField(default=False)
    lesson4 = models.BooleanField(default=False)
    lesson5 = models.BooleanField(default=False)
    lesson6 = models.BooleanField(default=False)
    lesson7 = models.BooleanField(default=False)
    lesson8 = models.BooleanField(default=False)
    lesson9 = models.BooleanField(default=False)
    lesson10 = models.BooleanField(default=False)
    lesson11 = models.BooleanField(default=False)
    lesson12 = models.BooleanField(default=False)
    lesson13 = models.BooleanField(default=False)
    lesson14 = models.BooleanField(default=False)
    lesson15 = models.BooleanField(default=False)

    def __str__(self):
        return f"Lesson results for {self.user.username}"

