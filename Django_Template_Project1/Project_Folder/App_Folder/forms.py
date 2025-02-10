from django import forms
from .models import command


class commandForms(forms.ModelForm):
    class Meta:
        model= command
        fields="__all__"