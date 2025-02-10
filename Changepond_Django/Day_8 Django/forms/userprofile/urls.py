from django.urls import path
from . import views
urlpatterns = [
    path("",views.FormsViews.as_view()),
    path("list_view",views.feedbacklistView.as_view()),
    path("feedback",views.Template.as_view())
]
