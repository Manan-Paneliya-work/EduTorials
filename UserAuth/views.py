from django.shortcuts import render

# Create your views here.
def login(request):
    return render(request, 'UserAuth/login.html')

def register(request):
    return render(request, 'UserAuth/register.html')