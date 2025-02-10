# from django.shortcuts import get_object_or_404
# from django.template.loader import render_to_string
# from django.http import HttpResponse
# from weasyprint import HTML
# from .models import Order_table
# from Product_Table.models import Product_Table
# from Shipping_Table.models import Shipping_Table
# from User_Table.models import CustomUser    

# def generate_pdf_receipt(request, order_id):
#     # Retrieve the order based on the provided order_id
#     order = get_object_or_404(Order_table, id=order_id)

#     # Prepare data for the PDF
#     context = {
#         'order': order,
#         'products': Product_Table.objects.filter(id__in=order.product_ids),  # Fetch related products
#         'shipping_info': Shipping_Table.objects.filter(id=order.shipping).first(),  # Fetch shipping info
#         'user': CustomUser.objects.filter(id=order.user_id).first()  # Fetch user info
#     }

#     # Render the HTML content with context
#     html_content = render_to_string('order_receipt.html', context)

#     # Generate PDF from HTML content
#     pdf_file = HTML(string=html_content).write_pdf()

#     # Return the PDF response
#     response = HttpResponse(pdf_file, content_type='application/pdf')
#     response['Content-Disposition'] = f'attachment; filename="receipt_{order_id}.pdf"'
#     return response
