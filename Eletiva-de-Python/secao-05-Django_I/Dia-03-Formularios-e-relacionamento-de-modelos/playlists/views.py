from django.shortcuts import render
from playlists.forms import CreateMusicForm, CreateSingerForm


def music(request):
    form = CreateMusicForm()
    contex = {"form": form}
    return render(request, "music.html", contex)


def create_singer(request):
    form = CreateSingerForm()
    contex = {"form": form}
    return render(request, "singer.html", contex)
