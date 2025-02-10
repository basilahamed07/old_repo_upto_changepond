from django.db import models

from User_Table.models import CustomUser
from Product_Table.models import Product_Table
from Shipping_Table.models import Shipping_Table

# Order_ID (Primary Key)
# User_ID (Foreign Key referencing User)
# Shipping_id (Foreign Key referencing User)
# Order_Date
# Total_Amount
# Product_Ids (Array of Foreign Keys referencing Product)


# Create your models here.
class Order_table(models.Model):
    user=models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    order_id=models.IntegerField()
    shipping=models.ForeignKey(Shipping_Table,on_delete=models.CASCADE, null=True, blank=True)
    order_date=models.DateField(auto_now=True)
    Total_amount=models.FloatField()
    products=models.ForeignKey(Product_Table,on_delete=models.CASCADE)


