from django.shortcuts import render
from django.http import *
from django.urls import reverse
from django.template.loader import render_to_string
# Create your views here.

dates = {
    "Monday":"very booring",
    "thursday":"booring",
    "wednesday":"Not bad",
    "Tuesday":"Good",
    "Friday":"very Good",
    "Saturday":"Very Happy",
    "Sunday":"Very Very Happy",
}

def days_in_number(request,days):
    dates_lists = list(dates.keys())
    if days>len(dates_lists):
        return HttpResponseNotFound(f"<h1>Not Found<h1>")
    day = dates_lists[days-1]
    redirect_days = reverse("day_details_str_path",args=[day])
    print(redirect_days)
    return HttpResponseRedirect(redirect_days)
    



def days_in_string(request,days):
    days = dates[days]
    day_resonce = render(request,"weeks/weeks.html",{"text":days})
    return HttpResponse(day_resonce)
    # return HttpResponseNotFound(f"<h1>Not Found<h1>")
    
def days_index(request):
    return render(request,"weeks/index.html",{"text":list(dates)})