from django.db import models

class MyModel(models.Model):
    name = models.CharField(max_length=100)
    image = models.BinaryField()  # Field to store binary data of the image

def image_as_base64(self):
       if self.image:
           return base64.b64encode(self.image).decode('utf-8')
       return None