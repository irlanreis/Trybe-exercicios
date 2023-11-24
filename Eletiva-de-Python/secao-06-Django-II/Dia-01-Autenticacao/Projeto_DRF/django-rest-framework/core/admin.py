from django.contrib import admin
from .models import Singer, Music, Playlist


admin.site.site_header = "Django REST Framework"
admin.site.site_title = "Django REST Framework"
admin.site.index_title = "Django REST"
admin.site.register(Singer)
admin.site.register(Music)
admin.site.register(Playlist)
