from django.urls import path
from .views import gallery, category_photos

urlpatterns = [
    path('', gallery, name='gallery'),
    path('category/<str:category_name>/', category_photos, name='category_photos'),
]


