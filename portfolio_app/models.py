from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Photo(models.Model):
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True, default=None)
    image = models.ImageField(upload_to='photos/')
    description = models.TextField(blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.description[:50]  # Show first 50 chars as title

class FoodPhoto(models.Model):
    image = models.ImageField(upload_to='food_photos/')
    caption = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.caption if self.caption else "Food Photo"
# Create your models here.
