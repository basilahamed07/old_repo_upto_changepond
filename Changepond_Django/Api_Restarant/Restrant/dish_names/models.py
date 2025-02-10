from django.db import models
from dish.models import Category



#function for upload the photo accoding to the name of the dish

def image_name_with_file_path(instance,fileename):
    return "/".join([str(instance.dishname),fileename])


# Create your models here.
class Dish(models.Model):
    dishname = models.CharField(max_length=100)
    price = models.FloatField()
    image = models.ImageField(upload_to=image_name_with_file_path,null=True,blank=True) # this will store the file or image file accoding to the dishname
    category = models.ForeignKey(Category,on_delete=models.CASCADE) 