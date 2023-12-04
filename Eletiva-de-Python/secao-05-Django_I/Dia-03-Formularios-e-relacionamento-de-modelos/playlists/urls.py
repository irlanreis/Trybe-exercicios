from django.urls import path
from playlists.views import create_singer, music


urlpatterns = [
    path("music/", music, name="music-page"),
    path("singer/", create_singer, name="singer-page")
]
