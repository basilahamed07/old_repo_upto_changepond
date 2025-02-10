from rest_framework import serializers
from .models import Feedback

class feedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ['id',"email","message","subject"]
        read_only_fields=['id']