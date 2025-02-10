from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.core.files.base import ContentFile
from django.core.files.storage import default_storage
from django.core.mail import EmailMessage
import json

@csrf_exempt
@require_POST
def upload_pdf(request):
    if 'file' not in request.FILES:
        return JsonResponse({'error': 'No file uploaded'}, status=400)
    
    pdf_file = request.FILES['file']
    file_path = default_storage.save(f'uploads/{pdf_file.name}', ContentFile(pdf_file.read()))
    
    return JsonResponse({'message': 'File uploaded successfully', 'file_path': file_path})

@csrf_exempt
@require_POST
def send_email(request):
    try:
        data = json.loads(request.body)
        order_id = data.get('orderId')
        recipient_email = data.get('recipientEmail')
        
        if not recipient_email:
            return JsonResponse({'error': 'Recipient email address not provided'}, status=400)
        
        subject = f'Order Invoice for Order #{order_id}'
        body = f'Please find the attached invoice for your order #{order_id}.'
        
        pdf_file_path = f'uploads/order_{order_id}.pdf'
        if not default_storage.exists(pdf_file_path):
            return JsonResponse({'error': 'PDF file not found'}, status=404)
        
        email = EmailMessage(
            subject,
            body,
            'your-email@example.com',  
            [recipient_email]  
        )
        
        with default_storage.open(pdf_file_path, 'rb') as pdf_file:
            email.attach(f'order_{order_id}.pdf', pdf_file.read(), 'application/pdf')
        
        email.send()
        
        return JsonResponse({'message': 'Email sent successfully'})
    
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
