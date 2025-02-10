from django.urls import path
from . import views

urlpatterns = [
    path("index",views.home_page),
    path("home",views.home_page, name="home"),
    path("all-post",views.all_post, name="all-post"),
    path("command_form",views.Commnad_postModels.as_view(), name="command"),
    path("Postforms",views.postModels.as_view()),
    path("tagforms",views.TagModels.as_view()),
    path("authortag",views.AuthorModels.as_view()),
    path("thankyou",views.thankyou),
    path('<str:details>',views.details, name= "details-slug")
]
