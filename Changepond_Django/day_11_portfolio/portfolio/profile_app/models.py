from django.db import models
from django.utils.text import slugify



# Create your models here.
class Tags(models.Model):
    caption = models.CharField(max_length=100)
    
    def __str__(self):
        return f"{self.caption}"



class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email_address = models.EmailField()
    
    def __str__(self):
        return f"{self.first_name}"
    



class Post(models.Model):
    title = models.CharField(max_length=100)
    image_name = models.CharField(max_length=100)
    # image_link = models.ImageField(upload_to="files")
    file_fields = models.FileField(upload_to="images", null=True)
    date = models.DateField(auto_now=True)
    slug = models.SlugField(default="",db_index=True,editable=False)
    content = models.CharField(max_length=100)
    author  = models.ForeignKey(Author,on_delete=models.CASCADE) 
    tags = models.ManyToManyField(Tags)
    

    #slug contents
    def save(self,*awrg,**kwarg):
        self.slug = slugify(self.title)
        return super().save(*awrg,**kwarg)
    
    def __str__(self):
        return f"{self.slug}"
    



class Comment(models.Model):

    user_name = models.CharField(max_length=100)
    user_email = models.EmailField()
    text = models.TextField()
    post = models.ForeignKey(Post,on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.user_name}"
        