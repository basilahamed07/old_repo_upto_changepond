from django.shortcuts import render
from django.views.generic.edit import CreateView
from django.views.generic import ListView

from .models import *
# Create your views here.


class DummyView(CreateView):
    model = Dummy
    template_name = "dummy_app/dummy.html"
    success_url = "/dummy/"
    fields = "__all__"

class renderimageView(ListView):
    model = Dummy
    template_name = "dummy_app/renderimage.html"
    context_object_name = "image_render"