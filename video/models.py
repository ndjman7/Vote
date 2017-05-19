from django.db import models

class Content(models.Model):
    title = models.CharField(max_length = 50)
    description = models.CharField(max_length = 200)
    videoId = models.CharField(max_length = 50)
    vote = models.IntegerField(default=0)

    def __str__(self):
        return self.title
