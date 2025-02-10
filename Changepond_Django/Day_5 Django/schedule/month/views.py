from django.shortcuts import render
from django.http import *
from django.urls import reverse
from django.template.loader import render_to_string
# sample function
Month = {
    "jan":"Learning Python",
    "feb":"sleeping",
    "march":None,
    "may":"do nothing",
    "april":"april Fool"
}
    
def index(request):
    months = list(Month)
    return render(request,"month/index.html",
                  {"month":months})


def month_in_number(request,month):
    months = list(Month.keys())
    if month>len(months):
        return HttpResponseNotFound(f"<h1>Data Not Found<h1>")
    monthss = months[month-1]
    redirect_path = reverse("month-detail",args=[monthss])
    print(redirect_path)
    return HttpResponseRedirect(redirect_path)


def month_details(request,month):
    # try:
        month_text = Month[month]
        # responce_data = render_to_string("month/month.html")
        print("inside")
        responce_data = render(request,"month/month.html",{"text":month_text})
        return HttpResponse(responce_data)
    # except:
    #     return HttpResponseNotFound(f"<h1>{month} Not Found <h1>")
# Create your views here.
    