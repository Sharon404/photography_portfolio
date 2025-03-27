from django.urls import path
from .views import gallery, category_photos
from .views import food_photography
from .views import contact


urlpatterns = [
    path('', gallery, name='gallery'),
    path('category/<str:category_name>/', category_photos, name='category_photos'),
    path('food-photography/', food_photography, name='food_photography'),
    path('contact/', contact, name='contact'),
    
]
