from django.shortcuts import render
from django.shortcuts import render


# Create your models here.
def home(request):
    return render(request, 'Home/index.html')

def courses(request):
    return render(request, 'Home/courses.html')