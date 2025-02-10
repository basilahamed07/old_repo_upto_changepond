from django.http import JsonResponse
from rest_framework.decorators import api_view
from Product_Table.models import Product_Table
from Coupon_Table.models import Coupon_Table
from Order_Table.models import Order_table
from Product_Table.serializers import Product_Serializer
from Coupon_Table.serializers import CouponSerializer
from Order_Table.serializers import OrderSerializers

@api_view(['POST'])
def chatbot_view(request):
    user_query = request.data.get('query', '').strip().lower()
    user_id = request.data.get('user_id')

    if 'list products' in user_query:
        latest_products = Product_Table.objects.all().order_by('-id')[:3]
        serializer = Product_Serializer(latest_products, many=True)
        response_data = {
            'messages': [{
                'type': 'products',
                'items': serializer.data
            }]
        }
    elif 'coupon' in user_query:
        coupons = Coupon_Table.objects.filter(discount=10)[0:1]
        serializer = CouponSerializer(coupons, many=True)
        response_data = {
            'messages': [{
                'type': 'text',
                'text': 'Coupons with 10% discount: ' + ', '.join([f"Code: {c['code']}" for c in serializer.data])
            }]
        }
    elif 'my orders' in user_query and user_id:
        orders = Order_table.objects.filter(user_id=user_id)
        serializer = OrderSerializers(orders, many=True)
        response_data = {
            'messages': [{
                'type': 'orders',
                'items': serializer.data
            }]
        }
    else:
        response_data = {
            'messages': [{
                'type': 'text',
                'text': 'Sorry, I did not understand your query. Can you please rephrase?'
            }]
        }

    return JsonResponse(response_data)
