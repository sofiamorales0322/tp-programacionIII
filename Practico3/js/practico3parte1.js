//Ejercicio 1
function validarFechaDeNacimiento () {
    let fechaNacimiento = document.getElementById("fechanac").value;

    let fechaIngresada = new Date(fechaNacimiento)
    let fechaActual = new Date()


    if (fechaIngresada > fechaActual) {
        document.getElementById("mensajeFecha").innerHTML = "La fecha de nacimiento no puede ser posterior a la fecha actual";
        return false;
    }

    document.getElementById("mensajeFecha").innerHTML = "";
    return true;
}

//Ejercicio 2
function validarDni () {
    let dniForm = document.getElementById("dni").value;
    let mensaje = "";
    if (!/^\d{8}$/.test(dniForm)) {
        mensaje = "El DNI debe contener 8 dígitos"
        document.getElementById("mensajeDni").innerHTML = mensaje;
        return false;
    }
    document.getElementById("mensajeDni").innerHTML = mensaje;
    return true;
}

function validarFormulario () {
    let fechaValida = validarFechaDeNacimiento();
    let dniValido = validarDni();

    return fechaValida && dniValido;
}

//Ejercicio 3.1
function Actividad (nombre, lugar, dia, horario, cupo, estado) {
    this.nombre = nombre;
    this.lugar = lugar;
    this.dia = dia;
    this.horario;
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
sistema.agregarActividad(new Actividad("Futbol", "Cancha general", "Miercoles y Viernes", "19:00 - 21:00", "40", "disponible"));
sistema.agregarActividad(new Actividad("Voley", "Cancha techada", "Miercoles y Viernes", "17:00", "50", "disponible"));
sistema.agregarActividad(new Actividad("Basquet", "Cancha techada", "Martes y Jueves", "20:00", "60", "disponible"));
sistema.agregarActividad(new Actividad("Atletismo", "Cancha general", "Miercoles y Viernes", "20:00", "30", "disponible"));

//console.log(sistema.listarActividades());