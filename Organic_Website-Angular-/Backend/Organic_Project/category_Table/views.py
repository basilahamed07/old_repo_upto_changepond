from django.shortcuts import render
from.models import Category_Table
from .serializers import CategorySerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.exceptions import APIException
from rest_framework.response import Response
from rest_framework import status,parsers
from rest_framework.decorators import action
from rest_framework import permissions
from rest_framework_simplejwt.authentication import JWTAuthentication 

# Create your views here.
class CategoryViewSet(ModelViewSet):
    queryset = Category_Table.objects.all()
    serializer_class = CategorySerializer
    parser_classes = (parsers.FormParser,parsers.MultiPartParser,parsers.FileUploadParser)
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]





