from sajt.models import Post, Comment
from rest_framework import viewsets, permissions
from sajt.serializers import PostSerializer, CommentSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = PostSerializer


class CommentViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Comment.objects.all()

    serializer_class = CommentSerializer

