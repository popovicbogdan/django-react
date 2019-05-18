from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


# Create your models here.
class Post(models.Model):
    author = models.CharField(max_length=50)
    title = models.CharField(max_length=100)
    text = models.CharField(max_length=1000)
    owner = models.ForeignKey(
        User, related_name="posts", on_delete="models.CASCADE", null=True
    )
    created_at = models.DateTimeField(auto_now_add=True)


class Comment(models.Model):
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, related_name="comments", null=True
    )
    name = models.CharField(max_length=50)
    text = models.CharField(max_length=200)
    owner = models.ForeignKey(
        User, related_name="owner_comments", on_delete="models.CASCADE", null=True
    )
    posted_at = models.DateTimeField(default=timezone.now)
