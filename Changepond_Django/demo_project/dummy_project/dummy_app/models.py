from django.db import models

# Create your models here.
class Dummy(models.Model):
    name = models.CharField(max_length=20)
    image = models.ImageField(upload_to="manoj")
    files = models.FileField(upload_to="basil")