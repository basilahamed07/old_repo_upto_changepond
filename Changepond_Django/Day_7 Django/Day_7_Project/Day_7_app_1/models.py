from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.template.defaultfilters import slugify
# Create your models here.
class Author(models.Model):
    First_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    city = models.CharField(max_length=100,null=True)
    age = models.IntegerField(validators=[MaxValueValidator(60), MinValueValidator(18)], null=True)
    rating = models.IntegerField(validators=[MaxValueValidator(5),MinValueValidator(2)], null=True)
    full_name =models.CharField(max_length=20,null=True)
    slug = models.SlugField(default="",db_index=True,editable=False)
    
    #here is the syntax for the slygify and full_name
    #slugyfy the name like if the name is basil ahamed mean it will return the basil-ahamed like this
    def save(self, *args, **kwargs):
        self.full_name = f"{self.First_name} {self.last_name}" 
        self.slug = slugify(self.full_name)
        super().save(*args,**kwargs)
    
    def __str__(self):
        return f"{self.First_name}  {self.last_name}"

    