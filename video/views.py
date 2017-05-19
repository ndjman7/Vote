from django.shortcuts import render
from .models import Content

def index(request):
    context = {}
    contents = Content.objects.all()
    context['contents'] = contents
    return render(request, 'video/list.html', context)

