from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DishnameCreateView
 
 
 #prebuild code for swagger api
router = DefaultRouter()
router.register('', DishnameCreateView, basename='dish_name')
app_name ='dish_name'
 
urlpatterns=[
    path('', include(router.urls)),
]