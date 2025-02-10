from django.urls import path
from .views import upload_pdf, send_email

urlpatterns = [
    path('upload-pdf/', upload_pdf, name='upload_pdf'),
    path('send-email/', send_email, name='send_email'),
]
