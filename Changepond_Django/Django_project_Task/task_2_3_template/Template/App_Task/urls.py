from django.urls import path
from . import views
urlpatterns = [
    path('<str:websites>', views.website_1 )    
]
z