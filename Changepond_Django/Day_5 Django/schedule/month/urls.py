from django.contrib import admin
from django.urls import path
from .views import month_in_number, index, month_details
urlpatterns = [
    path("index",index, name="main_page"),
    path("<int:month>",month_in_number),
    path("<str:month>",month_details, name = "month-detail" )
]