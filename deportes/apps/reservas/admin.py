from django.contrib import admin

from apps.reservas.models import ActividadDeportiva


@admin.register(ActividadDeportiva)
class ActividadDeportivaAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'descripcion', 'lugar', 'cupo']
    search_fields = ('nombre', 'lugar',)

