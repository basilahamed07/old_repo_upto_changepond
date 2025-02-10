from django.shortcuts import render, redirect
from django.http import *
# Create your views here.
def website_1(request,websites):
    if websites == "facebook":
        return HttpResponse("FaceBook Page")
    elif websites == "instagram":
        return HttpResponse("instagram page")
    elif websites == "youtube":
        return HttpResponse("youtube page")
    else:
        return HttpResponse("page not found")