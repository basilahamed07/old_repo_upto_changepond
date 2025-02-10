from django.shortcuts import render
from .models import *
from .forms import *
from django.views.generic.edit import CreateView
from django.http import HttpResponseRedirect

# Create your views here.
def landing_page(request):
    latest_data = Post.objects.all().order_by("-date")[0:3]
    if request.method == 'POST':
        form=commandForms(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect("/thankyou")
    else:
        form=commandForms()
    return render(request,"App_Folder/landingpage.html",{"data":latest_data,"form":form})

def all_post(request):
    data = Post.objects.all()
    return render(request,"App_Folder/all-post.html",{"data":data})

def dataretrive(request,uniqe):
    posts = Post.objects.get(slug=uniqe)

    #to get the ony one value
    owner_id = Post.objects.only('id').get(slug=uniqe).id
    commands = command.objects.filter(post_id=owner_id)
    return render(request,"App_Folder/post_details.html",{"data":posts,"command":commands})


def thankyou(request):
    return render(request,"App_Folder/thankyou.html")

class ImageCreateView(CreateView):
    model = Post
    template_name = "App_Folder/image_form.html"
    success_url = "thankyou"
    fields = "__all__"

