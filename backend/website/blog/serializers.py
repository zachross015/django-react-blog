from django.contrib.auth.models import User
from rest_framework import serializers
from blog.models import Post


# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff']


class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'slug', 'author', 'updated_on', 'content', 'created_on']
