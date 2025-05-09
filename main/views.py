import json
from django.core.mail import EmailMessage
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Post
from .forms import UserRegisterForm
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
import os
from django.contrib.auth.decorators import user_passes_test
from .models import TestResults
from .models import LessonResult
from .models import CustomUser
from .forms import CustomLoginForm
from django.contrib.auth.views import LoginView
from .forms import ProfileEditForm



def index(request):
    context = {
        'posts': Post.objects.all()
    }

    return render(request, 'main/index.html', context)

def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()  # Сохраняем пользователя с выбранной ролью
            username = form.cleaned_data.get('username')
            messages.success(request, f'Ваш аккаунт создан: можно войти на сайт.')
            return redirect('login')
    else:
        form = UserRegisterForm()
    return render(request, 'accounts/register.html', {'form': form})


class CustomLoginView(LoginView):
    form_class = CustomLoginForm
    template_name = 'login.html'


def send_email_view(request):
    if request.method == 'POST':  # Обрабатываем только POST-запросы
        subject = ""
        message = ""
        recipient_list = ['cumpuellavas@gmail.com']  # Адрес получателя
        sender_email = 'vasyatarn13@gmail.com'  # Ваш адрес Gmail

        # Путь к файлу для вложения
        BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        file_path = os.path.join(BASE_DIR, 'files', '11.blend')  # Укажите путь к файлу
        try:
            # Создаём объект EmailMessage
            email = EmailMessage(
                subject,
                message,
                sender_email,
                recipient_list
            )

            # Добавляем файл как вложение
            email.attach_file(file_path)

            # Отправляем письмо
            email.send()

            return JsonResponse({'message': 'Письмо с файлом успешно отправлено!'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    return render(request, 'send_email.html')

def is_teacher(user):
    return user.is_authenticated and user.role == 'teacher'

#@user_passes_test(is_teacher)
def teacher_dashboard(request):
    user = request.user

    if user.role != 'teacher':
        return render(request, 'accounts/login.html')

    # Показываем только учеников из той же группы
    students = CustomUser.objects.filter(role='student', group_name=user.group_name)

    data = []
    for student in students:
        lesson_results = LessonResult.objects.filter(user=student).first()
        test_results = TestResults.objects.filter(user=student).first()

        student_data = {
            'student': student,
            'lessons': lesson_results,
            'tests': test_results,
        }
        data.append(student_data)

    return render(request, 'accounts/teacher_dashboard.html', {'data': data})


@login_required
def profile(request):
    return render(request, 'accounts/profile.html')

@login_required
def about(request):
    return render(request, 'main/about.html')

#@login_required
def lesson1(request):
    return render(request, 'main/lessons/lesson1.html')

def lesson2(request):
    return render(request, 'main/lessons/lesson2.html')

def lesson3(request):
    return render(request, 'main/lessons/lesson3.html')

def lesson4(request):
    return render(request, 'main/lessons/lesson4.html')

def lesson5(request):
    return render(request, 'main/lessons/lesson5.html')

def lesson6(request):
    return render(request, 'main/lessons/lesson6.html')

def lesson7(request):
    return render(request, 'main/lessons/lesson7.html')

def lesson8(request):
    return render(request, 'main/lessons/lesson8.html')

def lesson9(request):
    return render(request, 'main/lessons/lesson9.html')

def lesson10(request):
    return render(request, 'main/lessons/lesson10.html')

def lesson11(request):
    return render(request, 'main/lessons/lesson11.html')

def lesson12(request):
    return render(request, 'main/lessons/lesson12.html')

def lesson13(request):
    return render(request, 'main/lessons/lesson13.html')

def lesson14(request):
    return render(request, 'main/lessons/lesson14.html')

def lesson15(request):
    return render(request, 'main/lessons/lesson15.html')



def practice1(request):
    return render(request, 'main/practices/practice1.html')

def practice2(request):
    return render(request, 'main/practices/practice2.html')

def practice3(request):
    return render(request, 'main/practices/practice3.html')

def practice4(request):
    return render(request, 'main/practices/practice4.html')

def practice5_1(request):
    return render(request, 'main/practices/practice5_1.html')

def practice5_2(request):
    return render(request, 'main/practices/practice5_2.html')

def practice6_1(request):
    return render(request, 'main/practices/practice6_1.html')

def practice6_2(request):
    return render(request, 'main/practices/practice6_2.html')

def practice7_1(request):
    return render(request, 'main/practices/practice7_1.html')

def practice7_2(request):
    return render(request, 'main/practices/practice7_2.html')

def practice7_3(request):
    return render(request, 'main/practices/practice7_3.html')

def practice8(request):
    return render(request, 'main/practices/practice8.html')

def practice9_1(request):
    return render(request, 'main/practices/practice9_1.html')

def practice9_2(request):
    return render(request, 'main/practices/practice9_2.html')

def practice9_3(request):
    return render(request, 'main/practices/practice9_3.html')

def practice10(request):
    return render(request, 'main/practices/practice10.html')

def practice11(request):
    return render(request, 'main/practices/practice11.html')

def practice12_1(request):
    return render(request, 'main/practices/practice12_1.html')

def practice12_2(request):
    return render(request, 'main/practices/practice12_2.html')

def practice13(request):
    return render(request, 'main/practices/practice13.html')

def practice14(request):
    return render(request, 'main/practices/practice14.html')

def practice15(request):
    return render(request, 'main/practices/practice15.html')


def test1(request):
    return render(request, 'main/tests/test1.html')

def test2(request):
    return render(request, 'main/tests/test2.html')

def test3(request):
    return render(request, 'main/tests/test3.html')

def test4(request):
    return render(request, 'main/tests/test4.html')

def test5(request):
    return render(request, 'main/tests/test5.html')

def test6(request):
    return render(request, 'main/tests/test6.html')

def test7(request):
    return render(request, 'main/tests/test7.html')

def test8(request):
    return render(request, 'main/tests/test8.html')

def test9(request):
    return render(request, 'main/tests/test9.html')

def test10(request):
    return render(request, 'main/tests/test10.html')

def test11(request):
    return render(request, 'main/tests/test11.html')

def test12(request):
    return render(request, 'main/tests/test12.html')

def test13(request):
    return render(request, 'main/tests/test13.html')

def test14(request):
    return render(request, 'main/tests/test14.html')

def test15(request):
    return render(request, 'main/tests/test15.html')

def system(request):
    return render(request, 'main/system.html')

def splashscreen(request):
    return render(request, 'main/splashscreen.html')


@login_required
def submit_result(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            result_type = data.get('type')

            if result_type == 'test':
                test_id = data.get('test_id')
                score = data.get('score')

                if test_id is None or score is None:
                    return JsonResponse({'error': 'Данные отсутствуют'}, status=400)

                test_id = int(test_id)
                score = int(score)

                if not (1 <= test_id <= 15):
                    return JsonResponse({'error': 'Неверный номер теста'}, status=400)

                test_results, created = TestResults.objects.get_or_create(user=request.user)
                setattr(test_results, f'test{test_id}', score)
                test_results.save()

                return JsonResponse({'message': 'Результат теста успешно сохранён!'})

            elif result_type == 'lesson':
                lesson_id = data.get('lesson_id')
                if lesson_id is None:
                    return JsonResponse({'error': 'lesson_id отсутствует'}, status=400)

                lesson_id = int(lesson_id)

                if not (1 <= lesson_id <= 15):
                    return JsonResponse({'error': 'Неверный номер урока'}, status=400)

                lesson_results, created = LessonResult.objects.get_or_create(user=request.user)
                setattr(lesson_results, f'lesson{lesson_id}', True)
                lesson_results.save()

                return JsonResponse({'message': 'Урок успешно отмечен как пройден!'})

            else:
                return JsonResponse({'error': 'Неверный тип результата'}, status=400)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Только POST-запросы разрешены'}, status=405)

@login_required
def profile_edit(request):
    if request.method == 'POST':
        form = ProfileEditForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            return redirect('profile')  # Перенаправляем на страницу профиля после сохранения
    else:
        form = ProfileEditForm(instance=request.user)

    return render(request, 'accounts/profile_edit.html', {'form': form})