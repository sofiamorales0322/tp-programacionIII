from django.db import models


class ActividadDeportiva(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    lugar = models.CharField(max_length=100)
    cupo = models.IntegerField()

    def __str__(self):
        return self.nombre


class Horario(models.Model):
    dia = models.CharField(max_length=15)
    hora_inicio = models.TimeField()
    hora_fin = models.TimeField()
    actividad = models.ForeignKey(ActividadDeportiva, on_delete=models.CASCADE, related_name='horarios')

    def __str__(self):
        return f'{self.hora_inicio} - {self.hora_fin}'


class Inscripcion(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    dni = models.CharField(max_length=8)
    fecha_inscripcion = models.DateField(auto_now_add=True)
    estado = models.BooleanField()
    horario = models.ForeignKey(Horario, on_delete=models.RESTRICT, related_name='horario')

    def __str__(self):
        return (f'{self.horario.actividad} - {self.horario} - {self.nombre} {self.apellido} - '
                f'{"Activa" if self.estado else "Cancelada"}')
