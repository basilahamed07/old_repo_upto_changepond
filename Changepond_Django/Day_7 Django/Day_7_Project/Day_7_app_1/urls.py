from django.urls import path
from .views import *
urlpatterns = [
    path("index",index),
    path("day_8_task",task),
    path("<int:ids>",id_filter, name="author_name"),
    path("<str:authors>",slug, name="author_name"),
    
]