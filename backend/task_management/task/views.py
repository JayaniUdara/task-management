
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Manager, Project
from .serializers import ManagerSerializer, ProjectSerializer

@api_view(['GET'])
def get_managers(request):
    managers = Manager.objects.all()
    serializer = ManagerSerializer(managers, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_manager(request):
    serializer = ManagerSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)
