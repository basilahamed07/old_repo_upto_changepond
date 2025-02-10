from rest_framework import serializers
from User_Table.models import CustomUser
from Product_Table.models import Product_Table
from Shipping_Table.models import Shipping_Table
from .models import Order_table


class OrderSerializers(serializers.ModelSerializer):
    user_id=serializers.IntegerField(write_only=True)
    products_id=serializers.IntegerField(write_only=True)
    shipping_id=serializers.IntegerField(write_only=True)

    class Meta:
        model = Order_table
        fields=['id','user_id','order_id','shipping_id','order_date','Total_amount','products_id']
        read_only_fields=['id']

        shipping_id = serializers.CharField(required=False)
