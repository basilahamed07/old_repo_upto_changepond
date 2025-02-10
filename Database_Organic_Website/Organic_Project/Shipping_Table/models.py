from typing import Iterable
from django.db import models

import random
# Create your models here.


class Shipping_Table(models.Model):

    
    Shipping_id = models.CharField(max_length=20, editable=True)
    shipping_status = models.CharField(max_length=10)
    tracking_id = models.CharField(max_length=20,editable=True)
    
    
    
    def save(self, *awrg, **kwarg):
        collections = ["1","2","3","4","5","6","7","8","9","0"]
        code_tracking = ""
        for trash in range(10):
            code_tracking += random.choice(collections)
        self.tracking_id= code_tracking
        code_shipping = ""
        for trash in range(10):
            code_shipping += random.choice(collections)
        self.Shipping_id= code_shipping
        return super().save(*awrg, **kwarg)
