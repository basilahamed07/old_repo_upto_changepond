from django.shortcuts import render
from .models import Shipping_Table
# from .serializers import CatogorySerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.exceptions import APIException
from rest_framework.response import Response
from rest_framework import status,parsers
from .serializers import ShippingSerializer
from rest_framework.decorators import action
from rest_framework import permissions
from rest_framework_simplejwt.authentication import JWTAuthentication



# Create your views here.

class ShipingViewSet(ModelViewSet):
    queryset = Shipping_Table.objects.all()
    serializer_class = ShippingSerializer
    # parser_classes = (parsers.FormParser,parsers.MultiPartParser,parsers.FileUploadParser)
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]
 





