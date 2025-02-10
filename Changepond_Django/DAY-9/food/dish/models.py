from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
# Create your models here.                          
 


class Address(models.Model):
    door_number = models.IntegerField()
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    postal_code = models.IntegerField()
    
    def __str__(self):
        return f"{self.city}"
    
class Chef(models.Model):
    Name = models.CharField(max_length=100)
    age = models.IntegerField()
    address = models.ForeignKey(Address, on_delete=models.CASCADE,null=True)
    
    def __str__(self):
        return f"{self.Name}"
    
class Dish(models.Model):
    Title = models.CharField(max_length=100)
    rating = models.IntegerField(validators=[
        MaxValueValidator(5), MinValueValidator(1)
    ])
    chief = models.ForeignKey(Chef,on_delete=models.CASCADE, null=True)
    
    def __str__(self):
        return f"{self.Title}"