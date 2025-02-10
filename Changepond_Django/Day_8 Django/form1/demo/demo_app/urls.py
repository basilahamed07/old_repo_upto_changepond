from django.urls import path
from . import views
urlpatterns = [
    path("", views.UserImageView.as_view())
]
