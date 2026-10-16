from django import forms

from apps.reservas.models import ActividadDeportiva


class ActividadForm(forms.ModelForm):
    class Meta:
        model = ActividadDeportiva
        fields = ('nombre', 'descripcion', 'lugar', 'cupo')

        widgets = {
            'nombre': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Ingrese el nombre de la actividad'
            }),
            'descripcion': forms.Textarea(attrs={
                'class': 'form-control',
                'rows': 3,
                'placeholder': 'Escriba una descripción...'
            }),
            'lugar': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Ingrese el lugar de la actividad'
            }),
            'cupo': forms.NumberInput(attrs={
                'class': 'form-control',
                'placeholder': 'cupo'
            }),
        }

