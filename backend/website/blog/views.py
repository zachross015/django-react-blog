from django.contrib.auth.models import User
from rest_framework import viewsets, permissions, generics
from blog.serializers import UserSerializer, PostSerializer
from blog.models import Post


# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.filter(status=1).order_by('-created_on')
    serializer_class = PostSerializer
