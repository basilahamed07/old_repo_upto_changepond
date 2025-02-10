from django.shortcuts import render
from .models import *
from django.views.generic.edit import CreateView


# Create your views here.
def home_page(request):
    introduction_data = Author.objects.all()[0]
    print(introduction_data.first_name)
    posts = Post.objects.all().order_by("-date").values()[0:3]
    print(posts)

    return render(request,"app_database/landing.html",{"introduction_data":introduction_data,
                                                "data":posts})

def all_post(request):
    posts = Post.objects.all()
    return render(request,"app_database/all_post.html",{"data":posts})

def details(request,details):
    posts = Post.objects.get(slug=details)
    return render(request,"app_database/post_details.html",{"post":posts})




#creating the command post sections:

def thankyou(request):
    return render(request,"app_database/thankyou.html")


class Commnad_postModels(CreateView):
    model = Comment
    template_name = "app_database/command_forms.html"
    success_url = "thankyou"    
    fields = "__all__"
class postModels(CreateView):
    model = Post
    template_name = "app_database/postmodels.html"
    success_url = "thankyou"
    fields = "__all__"
class TagModels(CreateView):
    model = Comment
    template_name = "app_database/tagmodels.html"
    success_url = "thankyou"
    fields = "__all__"
class AuthorModels(CreateView):
    model = Comment
    template_name = "app_database/author.html"
    success_url = "thankyou"
    fields = "__all__"

class ImageModels(CreateView):
    model = imagesclass
    template_name = "app_database/testimage.html"
    success_url = "thankyou"
    fields = "__all__"

def image_render(request):
    return render(request,"app_database/rendertest.html")