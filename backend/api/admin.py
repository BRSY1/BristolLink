from django.contrib import admin

from .models import (
    User,
    Crush, 
    Match
)

# Register your models here.
admin.site.register(User)
admin.site.register(Crush)
admin.site.register(Match)