from rest_framework import serializers
from .models import *
class BookSerializer(serializers.ModelSerializer):
    #if you want to create the serializer for forign key we want to implement this one
    author_id = serializers.IntegerField(write_only = True)
    class Meta:
        model = Book_app_models
        fields = ['id','title','rating','author_id']
        # fields = "__all__"
        read_only_fields = ['id']
 
 