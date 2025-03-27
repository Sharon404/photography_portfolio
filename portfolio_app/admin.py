from django.contrib import admin
from .models import Category, Photo
from .models import FoodPhoto

admin.site.register(Category)
admin.site.register(Photo)
admin.site.register(FoodPhoto)


# Register your models here.
