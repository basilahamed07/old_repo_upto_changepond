from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import Product_ViewSet
router = DefaultRouter()
router.register('', Product_ViewSet, basename='Product')
# router.register('getonly', Product_getviewst, basename='Productget')
app_name ='Product'
 
urlpatterns=[
    path('', include(router.urls))
]