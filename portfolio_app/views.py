from django.shortcuts import render
from .models import Photo

def gallery(request):
    photos = Photo.objects.all()
    return render(request, 'portfolio_app/gallery.html', {'photos': photos})

def category_photos(request, category_name):
    photos = Photo.objects.filter(category__name=category_name)
    return render(request, 'portfolio_app/gallery.html', {'photos': photos, 'category_name': category_name})


# Create your views here.
