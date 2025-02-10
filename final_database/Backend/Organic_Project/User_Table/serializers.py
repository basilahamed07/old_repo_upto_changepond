from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from .models import CustomUser  

class UserSerializer(serializers.ModelSerializer):
    """UserSerializer to get user details using JWT authentication."""
    
    class Meta:
        model = CustomUser
        fields = ["id", "first_name", "last_name", "email", "phone_number", "first_line", "city", "state", "pincode"]
 
class RegisterSerializer(serializers.ModelSerializer):
    """RegisterSerializer to create user."""
    # profile = serializers.ImageField(required=False, allow_null=True)

    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=CustomUser.objects.all())],
    )
    password = serializers.CharField(
        required=True, 
        validators=[validate_password],
        write_only=True
    )
    confirm_password = serializers.CharField(
        required=True,
        write_only=True
    )
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    phone_number = serializers.CharField(required=True)
    first_line = serializers.CharField(required=False)
    city = serializers.CharField(required=False)
    state = serializers.CharField(required=False)
    pincode = serializers.CharField(required=False)
    # profile = serializers.ImageField(required=False)
    
    
    
    class Meta:
        model = CustomUser
        fields = ["email", "password", "confirm_password", "first_name", "last_name", "phone_number", "first_line", "city", "state", "pincode"]

    def validate(self, attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError({"password": "Password fields didn' match."})
        return attrs
 
    def create(self, validated_data):
        validated_data.pop('confirm_password')  
        user = CustomUser.objects.create(
            # profile=validated_data['profile'],
            email=validated_data['email'],
            username=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            phone_number=validated_data['phone_number'],
            first_line=validated_data['first_line'],
            city=validated_data['city'],
            state=validated_data['state'],
            pincode=validated_data['pincode'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
