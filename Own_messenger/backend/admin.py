from django.contrib import admin
from .models import *


class CategoryUser(admin.ModelAdmin):
    list_display = ("id", 'name')


admin.site.register(User, CategoryUser)
