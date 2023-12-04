from django.shortcuts import render
from playlists.forms import CreateMusicForm


def music(request):
    form = CreateMusicForm()
    contex = {"form": form}
    return render(request, "music.html", contex)
