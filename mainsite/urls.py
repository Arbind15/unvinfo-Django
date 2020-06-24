from django.urls import path

from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.file, name='file'),
    path('unv/', views.home, name='home'),
    path('chunks/', views.chunks, name='chunks'),
    path('search/', views.Search, name='search'),
    path('reset/', views.reset, name='reset'),
    path('save_file', views.Save_file, name='Save_file')
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)