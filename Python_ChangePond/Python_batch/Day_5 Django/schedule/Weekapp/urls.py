from django.contrib import admin
from django.urls import path
from .views import *
urlpatterns = [
    path("<int:days>",days_in_number),
    path("<str:days>",days_in_string,name="day_details_str_path"),
]