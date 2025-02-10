from django.shortcuts import render
# from .forms import Profileform
from django.views import View
from .models import profile

# Create your views here.

from django.http import HttpResponseRedirect
# Create your views here.
# def store_file(file):
#     with open('temp/image.jpg','+wb') as dest:
#         for chunk in file.chunks():
#             dest.write(chunk)
            
# class CreateProfileView(View):
#     def get(self, request):
#         forms = Profileform()
#         return render(request,'profile_upload/form_profile.html',{"forms":forms})
    
#     def post(self, request):
#         form_submit=Profileform(request.POST,request.FILES)
#         if form_submit.is_valid():
#             upload = profile(image=request.FILES['image'])
#             upload.save()
#             return HttpResponseRedirect('/profileupload')
#         # form_submit =Profileform()
#         return render(request,"profile_upload/form_profile.html",{"forms":form_submit})
    
    
from django.views.generic.edit import CreateView
class CreateProfileView(CreateView):
    model = profile
    template_name = "profile_upload/form_profile.html"
    success_url ='/profileupload'
    fields ="__all__"