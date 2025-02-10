from rest_framework import serializers
from .models import *


    

#getting the dish data without the image

class dishSerializer(serializers.ModelSerializer):
    #if you want to create the serializer for forign key we want to implement this one it will reffer it
    category_id = serializers.IntegerField(write_only=True)
    class Meta:
        model = Dish
        fields = ["id","dishname","price","image","category_id"]
        read_only_fields = ["id"]