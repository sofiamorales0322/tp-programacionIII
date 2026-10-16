from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.urls import reverse

from .forms import ActividadForm
from .models import ActividadDeportiva


def lista_actividades(request):
    actividades = ActividadDeportiva.objects.all()

    return render(request, "reservas/lista_actividades.html", {"actividades": actividades})


def agregar_actividad(request):
    nueva_actividad = None
    if request.method == 'POST':
        actividad_form = ActividadForm(request.POST)
        if actividad_form.is_valid():
            # Se guardan los datos que provienen del formulario en la B.D.
            nueva_actividad = actividad_form.save(commit=False)
            nueva_actividad.save()
            messages.success(request, 'Se ha agregado correctamente la actividad {}'.format(nueva_actividad))
            return redirect(reverse('reservas:detalle_actividad', args={nueva_actividad.id}))
    else:
        actividad_form = ActividadForm()

    return render(request, 'reservas/actividad_form.html', {'form': actividad_form})


def detalle_actividad(request, pk):
    actividad = get_object_or_404(ActividadDeportiva, pk=pk)
    return render(request, 'reservas/detalle_actividad.html', {'actividad': actividad})
