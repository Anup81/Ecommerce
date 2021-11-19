from django.shortcuts import render
# from .products import products
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
    
from base.models import Product

from base.serializers import ProductSerializers
from rest_framework import status


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializers(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializers(product, many=False)
    return Response(serializer.data)
