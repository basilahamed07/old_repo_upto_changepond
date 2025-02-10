from django.urls import path
from . import views
urlpatterns = [
    path("",views.DummyView.as_view()),
    path("image_render",views.renderimageView.as_view())
]
