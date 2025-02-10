from django.shortcuts import render
from django.http import *
from .models import Author
from django.db.models import *
# Create your views here.

# def Authorss(request,authors):
#     author = authors.split()
#     finding_1 = author[0]
#     finding_2 = author[1]
#     print(author)
#     rootword = Author.objects.filter(Q(First_name=finding_1)&Q(last_name=finding_2))
#     print(list(rootword))
#     print(rootword)
    # return render(request,"authors/author_name.html",{"author":rootword})
def id_filter(request,ids):
    try:
        filters = Author.objects.get(id=ids)
        return render(request,"authors/author_id.html",{"author":filters})
    except:
        raise Http404("error")
def slug(request,authors):
    try:
        filters = Author.objects.get(slug=authors)
        return render(request,"authors/author_slug.html",{"author":filters})
    except:
        raise Http404("error")
def index(request):
    return render(request,"authors/authors.html",{"author":Author.objects.all()})

def task(request):
    orders = Author.objects.all().order_by("full_name")
    counts = orders.count()
    average = Author.objects.all().aggregate(Avg("rating"))
    
    return render(request,"authors/Day_8_tasks.html",{"orders":orders,"counts":counts,"average":average})
