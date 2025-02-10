from django.urls import  path
from . import views

urlpatterns = [
    path("", views.landing_page, name="main"),
    path("post_adding", views.ImageCreateView.as_view(),name="POst-Add"),
    path("thankyou", views.thankyou),
    path("all-post", views.all_post, name="all-post"),
    path("<str:uniqe>", views.dataretrive, name="detail"),
    
] 
