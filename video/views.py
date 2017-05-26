from django.shortcuts import render
from .models import Content

def index(request):
    context = {}
    contents = Content.objects.all()
    context['contents'] = contents
    return render(request, 'video/list.html', context)

def detail(request, video_id):
    content = Content.objects.get(pk=video_id)
    return render(request, 'video/detail.html', {'content':content})
