from django.shortcuts import render
from django.http import *
from .forms import details
from .models import *
from django.views.generic import TemplateView
from django.views.generic import ListView
from django.views import View

# Create your views here.

class FormsViews(View):

    def get(self,request):
        form = details()
        return render(request, "forms/forms.html", {"form":form})

    def post(self,request):
        form = details(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect("feedback")
        return render(request,"forms/forms.html", {"form":form  })
        
    # 
        # if request.method == "POST":
        #     form_data = details(request.POST) # i will get the data from the froms
        #     if form_data.is_valid(): # i it check it is valid are nt inside the html page it self 
        #         # datas = Review(
        #         #     user_name = form_data.cleaned_data["user_name_2"],
        #         #     review = form_data.cleaned_data["rating"],
        #         #     message = form_data.cleaned_data["message"]
        #         # )
        #         form_data.save()
        #         return HttpResponseRedirect("feedback")
        # else:
        #     form_data = details() # it will act like the form and we written in the forms.py 
        # return render(request,"forms/forms.html", {"form":form_data})

class Template(TemplateView):
    template_name = "forms/thankyou.html"
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["Messgae"] = "somthing Here" 
        context["hello"] = "hello" 
        context["threee"] = "hi" 
        return context
    
class feedbacklistView(ListView):
    model = Review
    context_object_name = "reviews"
    template_name = "forms/feedlist.html"
    print(context_object_name)
# def feedback(request):
#     return render(request,"forms/thankyou.html")

