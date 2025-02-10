from django.shortcuts import render
from django.http import *
from django.urls import reverse

# sample function
Month = {
    "jan":"Learning Python",
    "feb":"sleeping",
    "may":"do nothing",
    "april":"april Fool"
}

def month_in_number(request,month):
    months = list(Month.keys())
    if month>len(months):
        return HttpResponseNotFound(f"<h1>Data Not Found<h1>")
    monthss = months[month-1]
    redirect_path = reverse("month-detail",args=[monthss])
    print(redirect_path)
    return HttpResponseRedirect(redirect_path)


def month_details(request,month):
    try:
        month_text = Month[month]
        return HttpResponse(f"<h1>{month_text}<h1>")
    except:
        return HttpResponseNotFound(f"<h1>{month} Not Found <h1>")
# Create your views here.
    