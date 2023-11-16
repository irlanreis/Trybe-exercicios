from django.shortcuts import render

# Create your views here.


def index(request):
    contex = {"company": "Trybe"}
    return render(request, "home.html", contex)


def about(request):
    return render(request, "about.html")
