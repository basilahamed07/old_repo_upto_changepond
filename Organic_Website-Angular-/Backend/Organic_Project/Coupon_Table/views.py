from django.shortcuts import render
from .models import Coupon_Table
# from .serializers import CatogorySerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.exceptions import APIException
from rest_framework.response import Response
from rest_framework import status,parsers
from .serializers import CouponSerializer
from rest_framework.decorators import action
from rest_framework import permissions
from rest_framework_simplejwt.authentication import JWTAuthentication



# Create your views here.

class CouponViewSet(ModelViewSet):
    queryset = Coupon_Table.objects.all()
    serializer_class = CouponSerializer
    parser_classes = (parsers.FormParser,parsers.MultiPartParser,parsers.FileUploadParser)
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]
 


"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI1NjQ2MDg5LCJpYXQiOjE3MjU1NTk2ODksImp0aSI6ImU2YzUwMmEyYzg0MTQxZjA4NjdhNjQ5MGE3N2ZjOWQ4IiwidXNlcl9pZCI6MX0.y8C22tIPDkX2SUVs_yvaXnMA6XjD302Rs8eBJg3Jx4s"





