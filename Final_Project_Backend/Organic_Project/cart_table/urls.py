from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import cartVieset
 
router = DefaultRouter()
router.register('', cartVieset, basename='cart')
app_name ='cart'
 
urlpatterns=[
    path('', include(router.urls))
]