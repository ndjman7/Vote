from django.shortcuts import render
from .models import Content

def index(request):
    context = {}
    contents = Content.objects.order_by('?')
    rank = Content.objects.order_by('-vote')[:3]
    context['contents'] = contents
    context['rank'] = rank
    return render(request, 'main/main.html', context)

def detail(request, video_id):
    content = Content.objects.get(pk=video_id)
    return render(request, 'video/detail.html', {'content':content})
