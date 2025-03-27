from django.shortcuts import render
from .models import Photo
from .models import FoodPhoto

def gallery(request):
    photos = Photo.objects.all()
    return render(request, 'gallery.html', {'photos': photos})

def category_photos(request, category_name):
    photos = Photo.objects.filter(category__name=category_name)
    return render(request, 'gallery.html', {'photos': photos, 'category_name': category_name})

def food_photography(request):
    food_photos = FoodPhoto.objects.all()
    return render(request, 'food.html', {'food_photos': food_photos})


def contact(request):
    return render(request, 'contact.html')  # Make sure 'contact.html' exists in the templates folder

# Create your views here.
