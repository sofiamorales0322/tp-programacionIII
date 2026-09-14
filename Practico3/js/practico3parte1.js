//Ejercicio 1
function validarFechaDeNacimiento (numeroParticipante) {
    let fechaNacimiento = document.getElementById("fechanac" + numeroParticipante).value;

    let fechaIngresada = new Date(fechaNacimiento)
    let fechaActual = new Date()


    if (fechaIngresada > fechaActual) {
        document.getElementById("mensajeFecha" + numeroParticipante).innerHTML = "La fecha de nacimiento no puede ser posterior a la fecha actual";
        return false;
    }

    document.getElementById("mensajeFecha" + numeroParticipante).innerHTML = "";
    return true;
}

//Ejercicio 2
function validarDni (numeroParticipante) {
    let dniForm = document.getElementById("dni" + numeroParticipante).value;
    let mensaje = "";
    if (!/^\d{8}$/.test(dniForm)) {
        mensaje = "El DNI debe contener 8 dígitos"
        document.getElementById("mensajeDni" + numeroParticipante).innerHTML = mensaje;
        return false;
    }
    document.getElementById("mensajeDni" + numeroParticipante).innerHTML = mensaje;
    return true;
}

function validarFormulario () {

    let cantidad = Number(document.getElementById("cantidadParticipantes").value);

    let formularioEsValido = true;

    for (let i = 1; i <= cantidad; i++) {
        let fechaValida = validarFechaDeNacimiento(i);
        let dniValido = validarDni(i);

        if (!fechaValida || !dniValido) {
            formularioEsValido = false;
        }
    }

    return formularioEsValido;
}

//Ejercicio 3.1
function Actividad (nombre, lugar, dia, horario, cupo, estado) {
    this.nombre = nombre;
    this.lugar = lugar;
    this.dia = dia;
    this.horario = horario;
    this.cupo = cupo;
    this.estado = estado;
}

//Ejercicio 3.2
class SistemaDeportes {
    constructor() {
        this.actividades = [];
    }
    agregarActividad(actividad) {
        this.actividades.push(actividad);
    }

    listarActividades() {
        return this.actividades;
    }
}

//Ejercicio 3.3
let sistema = new SistemaDeportes();
sistema.agregarActividad(new Actividad("Futbol", "Cancha general", "Miercoles y Viernes", "19:00", "40", "disponible"));
sistema.agregarActividad(new Actividad("Voley", "Cancha techada", "Miercoles y Viernes", "17:00", "50", "disponible"));
sistema.agregarActividad(new Actividad("Basquet", "Cancha techada", "Martes y Jueves", "20:00", "60", "disponible"));
sistema.agregarActividad(new Actividad("Atletismo", "Cancha general", "Miercoles y Viernes", "20:00", "30", "disponible"));

//console.log(sistema.listarActividades());

//Ejercicio 4

const tbody = document.getElementById("cuerpoTabla");

sistema.actividades.forEach(actividad => {

    const fila = tbody.insertRow();

    fila.insertCell(0).textContent = actividad.nombre;
    fila.insertCell(1).textContent = actividad.lugar;
    fila.insertCell(2).textContent = actividad.dia;
    fila.insertCell(3).textContent = actividad.horario;
    fila.insertCell(4).textContent = actividad.cupo;
    fila.insertCell(5).textContent = actividad.estado;
});

