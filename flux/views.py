from django.shortcuts import render

def signup(request):
    return render(request, "signup.html")

def home(request):
    return render(request, "home.html")

def cart(request):
    return render(request, "cart.html")

def orders(request):
    return render(request, "orders.html")

def profile(request):
    return render(request, "profile.html")

def settings(request):
    return render(request, "settings.html")