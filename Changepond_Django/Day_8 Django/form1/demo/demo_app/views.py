from django.shortcuts import render
from .forms import Profileform
from django.views import View
from django.http import *
import os
# Create your views here.

#this ste
def store_file(file):
    if os.path.exists("temp"):
        print("check")
    print("inside the function")
    with open("temp/image.jpg","+wb") as files:
        for trash in file.chunks():
            files.write(trash)
            

class UserImageView(View):
    def get(self,request):
        print("inside the get")
        form = Profileform()
        
        return render(request,"demo_app/forms.html",
                      {"form":form}
                      )
        
    def post(self,request):
        print(os.path)
        print("inside the post")
        form_file = Profileform(request.POST,request.FILES)
        if form_file.is_valid():
            print("inside the valid")
            print("calling the userimage")
            store_file(request.FILES["userimage"])
            return HttpResponseRedirect("/profileupload")
        return render(request,"demo_app/forms.html",{"form":form_file})

# def image_upload(request):
#     return render(request,"profile_upload/form_profile.html")
