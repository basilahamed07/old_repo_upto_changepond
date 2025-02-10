from rest_framework import serializers
from .models import *

#getting only catogory
class CatogorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id","categoryname"]
        read_only_fields = ["id"]
    
    
    

#getting the dish data without the image
