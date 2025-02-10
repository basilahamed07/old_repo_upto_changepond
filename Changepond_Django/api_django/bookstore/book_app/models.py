from django.db import models
from author_app.models import Author
from django.core.validators import MaxValueValidator, MinValueValidator
# Create your models here.

class Book_app_models(models.Model):
    title = models.CharField(max_length=100)
    rating = models.IntegerField(validators=[MaxValueValidator(5),MinValueValidator(1)])
    author = models.ForeignKey(Author,on_delete=models.CASCADE)
    