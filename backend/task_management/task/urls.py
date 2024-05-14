
from django.urls import path
from .views import get_managers, add_manager

urlpatterns = [
    path('api/managers/', get_managers),
    path('api/admin/add-manager/', add_manager),
]
