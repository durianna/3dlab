from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser
from django.contrib.auth.forms import AuthenticationForm
from django.utils.translation import gettext_lazy as _


# Регистрация с выбором роли
class UserRegisterForm(UserCreationForm):
    email = forms.EmailField(label="Электронная почта")
    role = forms.ChoiceField(choices=CustomUser.ROLE_CHOICES, label="Роль")
    group_name = forms.CharField(max_length=50, required=False, label="Группа")

    class Meta:
        model = CustomUser
        fields = [
            'username', 'email', 'password1', 'password2',
            'role', 'group_name'
        ]

        labels = {
            'username': 'Имя пользователя',
            'email': 'Электронная почта',
            'password1': 'Пароль',
            'password2': 'Подтверждение пароля',
        }
        help_texts = {
            'username': 'Обязательное поле. Не более 150 символов. Только буквы, цифры и @/./+/-/_',
            'password1': 'Пароль должен содержать не менее 8 символов.',
            'password2': 'Подтвердите пароль.',
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Переопределяем метки и подсказки для паролей
        self.fields['password1'].label = 'Пароль'
        self.fields['password1'].help_text = 'Пароль должен содержать не менее 8 символов.'

        self.fields['password2'].label = 'Подтверждение пароля'
        self.fields['password2'].help_text = 'Подтвердите пароль, введённый выше.'

        # Убираем стандартную подсказку на пароли в Django (про безопасность)
        self.fields['password1'].help_text = None
        self.fields['password2'].help_text = None

        for field in self.fields.values():
            if field.help_text:
                field.help_text = f'<span class="small-help-text">{field.help_text}</span>'


    def save(self, commit=True):
        user = super().save(commit=False)
        user.email = self.cleaned_data['email']
        user.role = self.cleaned_data['role']
        user.group_name = self.cleaned_data['group_name']
        if commit:
            user.save()
        return user


class CustomLoginForm(AuthenticationForm):
    username = forms.CharField(
        label=_('Имя пользователя'),
        max_length=150,
        widget=forms.TextInput(attrs={'class': 'form-control'})
    )
    password = forms.CharField(
        label=_('Пароль'),
        widget=forms.PasswordInput(attrs={'class': 'form-control'})
    )

class ProfileEditForm(forms.ModelForm):
    first_name = forms.CharField(max_length=30, label="Имя", required=True)
    surname = forms.CharField(max_length=50, label="Фамилия", required=True)
    last_name = forms.CharField(max_length=50, label="Отчество", required=False)
    email = forms.CharField(max_length=50, label="Электронная почта", required=False)
    group_name = forms.CharField(max_length=50, label="Группа", required=False)

    class Meta:
        model = CustomUser
        fields = ['first_name', 'surname', 'last_name', 'email', 'group_name']