from django.urls import path
from . import views
urlpatterns = [
    path("",views.home_page),
    path("home",views.home_page, name="home"),
    path("all-post",views.all_post, name="all-post"),
    path("command_form",views.Commnad_postModels.as_view()),
    path("Postforms",views.postModels.as_view()),
    path("tagforms",views.TagModels.as_view()),
    path("authortag",views.AuthorModels.as_view()),
    path("imagerender",views.ImageModels.as_view()),
    path("thankyou",views.thankyou),
    path("image_render",views.image_render),
    path('<str:details>',views.details, name= "details-slug")
]
