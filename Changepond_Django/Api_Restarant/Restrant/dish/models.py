from django.db import models

# Create your models here.


#function for upload the photo accoding to the name of the dish



#table one name of catogory
class Category(models.Model):
    categoryname = models.CharField(max_length=100)
    
    
    def __str__(self):
        return f"{self.categoryname}"
    
