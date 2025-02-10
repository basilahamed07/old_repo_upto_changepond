from django.shortcuts import render
from .models import *
from django.views.generic.edit import CreateView
# Create your views here.

def home_page(request):
    introduction_data = Author.objects.all()[0]
    print(introduction_data.first_name)
    posts = Post.objects.all().order_by("-date").values()[0:3]
    print(posts)

    return render(request,"app_1/landing.html",{"introduction_data":introduction_data,
                                                "data":posts})

def all_post(request):
    posts = Post.objects.all()
    return render(request,"app_1/all_post.html",{"data":posts})

def details(request,details):
    posts = Post.objects.get(slug=details)
    return render(request,"app_1/post_details.html",{"post":posts})




def thankyou(request):
    return render(request,"app_1/thankyou.html")


class Commnad_postModels(CreateView):
    model = Comment
    template_name = "app_1/command_forms.html"
    success_url = "thankyou"
    fields = "__all__"
    
class postModels(CreateView):
    model = Post
    template_name = "app_1/postmodels.html"
    success_url = "thankyou"
    fields = "__all__"
class TagModels(CreateView):
    model = Comment
    template_name = "app_1/tagmodels.html"
    success_url = "thankyou"
    fields = "__all__"
class AuthorModels(CreateView):
    model = Comment
    template_name = "app_1/author.html"
    success_url = "thankyou"
    fields = "__all__"
