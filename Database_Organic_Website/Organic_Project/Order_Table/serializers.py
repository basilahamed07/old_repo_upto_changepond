from rest_framework import serializers
from .models import Order_table
from User_Table.models import CustomUser
from Shipping_Table.models import Shipping_Table

class OrderSerializers(serializers.ModelSerializer):
    # user = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects.all(), source='user_id')
    # shipping = serializers.PrimaryKeyRelatedField(queryset=Shipping_Table.objects.all(), required=False)

    class Meta:
        model = Order_table
        fields = ['id', 'user_id', 'shipping', 'order_date', 'total_price', 'product_ids', 'quantity',"latitude","longitude"]
        read_only_fields = ['id', 'order_date']
