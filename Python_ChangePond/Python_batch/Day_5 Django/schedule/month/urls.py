from django.contrib import admin
from django.urls import path
from .views import *
urlpatterns = [
    
    path("<int:month>",month_in_number),
    path("<str:month>",month_details, name = "month-detail" )
]