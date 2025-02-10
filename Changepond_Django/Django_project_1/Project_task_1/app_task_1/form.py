# forms.py
from django import forms

class ImageUploadForm(forms.Form):
    name = forms.CharField(max_length=100)
    image_file = forms.FileField()  # Use FileField to get file data