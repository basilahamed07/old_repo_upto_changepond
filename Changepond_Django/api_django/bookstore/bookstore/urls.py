from django.contrib import admin
from django.urls import path,include
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions
from django.conf.urls.static import static
from django.conf import settings
from drf_yasg.utils import swagger_auto_schema
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
 
schema_view = get_schema_view(
   openapi.Info(
      title="Book Store API",
      default_version='v1',
      description="About Bookstore which will perform CRUD",
      terms_of_service="https://127.0.0.1:8000/",
      contact=openapi.Contact(email="kpbagde@gmail.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)
 
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/author',include('author_app.urls')),
    path('api/book',include('book_app.urls')),
    path('api/user',include('userprofile.urls')),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    #path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('api/token/',swagger_auto_schema(method='post',security=[])(TokenObtainPairView.as_view()),name='token_obtain_pair'),
    path('api/token/refresh/',swagger_auto_schema(method='post',security=[])(TokenRefreshView.as_view()),name='token_refresh')
 
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)