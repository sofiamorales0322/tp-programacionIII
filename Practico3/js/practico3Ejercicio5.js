//Ejercicio 5
const boton = document.getElementById("btnParticipantes");

boton.addEventListener("click", function() {

    let cantidad = Number(document.getElementById("cantidadParticipantes").value);

    const contenedor = document.getElementById("participantes");

    for (let i = 0; i < cantidad; i++) {

        const fieldset = document.createElement("fieldset");
        fieldset.className = "p-3 rounded mb-3";

        const participante = document.createElement("legend");
        const participanteNodo = document.createTextNode("Participante" + " " + (i + 1));
        participante.appendChild(participanteNodo);

        fieldset.appendChild(participante);

        const labelNombre = document.createElement("label");
        const nombreNodo = document.createTextNode("Apellido y Nombre:");
        labelNombre.appendChild(nombreNodo);
        labelNombre.setAttribute("for", "nombre" + (i + 1));
        labelNombre.className = "form-label";

        const inputNombre = document.createElement("input");
        inputNombre.type = "text";
        inputNombre.id = "nombre" + (i + 1);
        inputNombre.name = "nombre" + (i + 1);
        inputNombre.className = "form-control";
        inputNombre.required = true;

        fieldset.appendChild(labelNombre);
        fieldset.appendChild(inputNombre);

        const labelDni = document.createElement("label");
        const dniNodo = document.createTextNode("Dni:");
        labelDni.appendChild(dniNodo);
        labelDni.setAttribute("for", "dni" + (i + 1));
        labelDni.className = "form-label";

        const inputDni = document.createElement("input");
        inputDni.type = "text";
        inputDni.className = "form-control";
        inputDni.id = "dni" + (i + 1);
        inputDni.name = "dni" + (i + 1);
        inputDni.placeholder = "44556677";
        inputDni.maxLength = 8;
        inputDni.required = true;

        const msjDni = document.createElement("p");
        msjDni.id = "mensajeDni" + (i + 1);

        fieldset.appendChild(labelDni);
        fieldset.appendChild(inputDni);
        fieldset.appendChild(msjDni);

        const labelFecha = document.createElement("label");
        const fechaNodo = document.createTextNode("Fecha de nacimiento:");
        labelFecha.appendChild(fechaNodo);
        labelFecha.setAttribute("for", "fechanac" + (i +1));
        labelFecha.className = "form-label";

        const inputFecha = document.createElement("input");
        inputFecha.type = "date";
        inputFecha.className = "form-control";
        inputFecha.id = "fechanac" + (i + 1);
        inputFecha.name = "fechanac" + (i + 1);

        const msjFecha = document.createElement("p");
        msjFecha.id = "mensajeFecha" + (i + 1);

        fieldset.appendChild(labelFecha);
        fieldset.appendChild(inputFecha);
        fieldset.appendChild(msjFecha);

        const labelCorreo = document.createElement("label");
        const correoNodo = document.createTextNode("Correo electronico");
        labelCorreo.appendChild(correoNodo);
        labelCorreo.setAttribute("for", "correo" + (i +1));
        labelCorreo.className = "form-label";

        const inputCorreo = document.createElement("input");
        inputCorreo.type = "email";
        inputCorreo.className = "form-control";
        inputCorreo.id = "correo" + (i + 1);
        inputCorreo.name = "correo" + (i + 1);

        fieldset.appendChild(labelCorreo);
        fieldset.appendChild(inputCorreo);

        const labelSexo = document.createElement("p");
        const sexoNodo = document.createTextNode("Sexo:");
        labelSexo.appendChild(sexoNodo);

        const inputFemenino = document.createElement("input");
        inputFemenino.type = "radio";
        inputFemenino.className = "form-check-input";
        inputFemenino.id = "femenino" + (i + 1);
        inputFemenino.name = "sexo" + (i + 1);
        inputFemenino.value = "Femenino";

        const labelFemenino = document.createElement("label");
        const femeninoNodo = document.createTextNode("Femenino");
        labelFemenino.appendChild(femeninoNodo);
        labelFemenino.setAttribute("for", "femenino" + (i + 1));
        labelFemenino.className = "form-check-label";

        const inputMasculino = document.createElement("input");
        inputMasculino.type = "radio";
        inputMasculino.className = "form-check-input";
        inputMasculino.id = "masculino" + (i + 1);
        inputMasculino.name = "sexo" + (i + 1);
        inputMasculino.value = "Masculino";

        const labelMasculino = document.createElement("label");
        const masculinoNodo = document.createTextNode("Masculino");
        labelMasculino.appendChild(masculinoNodo);
        labelMasculino.setAttribute("for", "masculino" + (i + 1));
        labelMasculino.className = "form-check-label";

        const inputNoBinario = document.createElement("input");
        inputNoBinario.type = "radio";
        inputNoBinario.className = "form-check-input";
        inputNoBinario.id = "nobinario" + (i + 1);
        inputNoBinario.name = "sexo" + (i + 1);
        inputNoBinario.value = "No binario";

        const labelNoBinario = document.createElement("label");
        const noBinarioNodo = document.createTextNode("No binario");
        labelNoBinario.appendChild(noBinarioNodo);
        labelNoBinario.setAttribute("for", "nobinario" + (i + 1));
        labelNoBinario.className = "form-check-label";


        fieldset.appendChild(labelSexo);
        fieldset.appendChild(inputFemenino);
        fieldset.appendChild(labelFemenino);
        fieldset.appendChild(document.createElement("br"));
        fieldset.appendChild(inputMasculino);
        fieldset.appendChild(labelMasculino);
        fieldset.appendChild(document.createElement("br"));
        fieldset.appendChild(inputNoBinario);
        fieldset.appendChild(labelNoBinario);

        const fieldsetD = document.createElement("fieldset");
        fieldsetD.className = "mb-3 p-3";

        const informacion = document.createElement("legend");
        const informacionNodo = document.createTextNode("Información deportiva");
        informacion.appendChild(informacionNodo);
        fieldsetD.appendChild(informacion);

        const labelNivel = document.createElement("label");
        const nivelNodo = document.createTextNode("Nivel:");
        labelNivel.appendChild(nivelNodo);
        labelNivel.setAttribute("for", "nivel" + (i + 1));
        labelNivel.className = "form-label";

        const selectNivel = document.createElement("select");
        selectNivel.className = "form-select";
        selectNivel.id = "nivel" + (i + 1);
        selectNivel.name = "nivel" + (i + 1);

        const optionInicial = document.createElement("option");
        const inicialNodo = document.createTextNode("Inicial");
        optionInicial.value = "inicial";
        optionInicial.appendChild(inicialNodo);

        const optionIntermedio = document.createElement("option");
        const intermedioNodo = document.createTextNode("Intermedio");
        optionIntermedio.value = "intermedio";
        optionIntermedio.appendChild(intermedioNodo);

        const optionAvanzado = document.createElement("option");
        const avanzadoNodo = document.createTextNode("Avanzado");
        optionAvanzado.value = "avanzado";
        optionAvanzado.appendChild(avanzadoNodo);

        selectNivel.appendChild(optionInicial);
        selectNivel.appendChild(optionIntermedio);
        selectNivel.appendChild(optionAvanzado);
        fieldsetD.appendChild(labelNivel);
        fieldsetD.appendChild(selectNivel);


        const experiencia = document.createElement("p");
        const experienciaNodo = document.createTextNode("¿Posee experiencia previa?");
        experiencia.appendChild(experienciaNodo);

        const inputSi = document.createElement("input");
        inputSi.type = "radio";
        inputSi.className = "form-check-input";
        inputSi.id = "si" + (i + 1);
        inputSi.name = "experiencia" + (i + 1);
        inputSi.value = "si";

        const labelSi = document.createElement("label");
        const siNodo = document.createTextNode("Si");
        labelSi.setAttribute("for", "si" + (i + 1));
        labelSi.className = "form-check-label";
        labelSi.appendChild(siNodo);

        const inputNo = document.createElement("input");
        inputNo.type = "radio";
        inputNo.className = "form-check-input";
        inputNo.id = "no" + (i + 1);
        inputNo.name = "experiencia" + (i + 1);
        inputNo.value = "no";

        const labelNo = document.createElement("label");
        const noNodo = document.createTextNode("No");
        labelNo.setAttribute("for", "no" + (i + 1));
        labelNo.className = "form-check-label";
        labelNo.appendChild(noNodo);

        fieldsetD.appendChild(experiencia);
        fieldsetD.appendChild(inputSi);
        fieldsetD.appendChild(labelSi);
        fieldsetD.appendChild(document.createElement("br"));
        fieldsetD.appendChild(inputNo);
        fieldsetD.appendChild(labelNo);


        const labelObservaciones = document.createElement("label");
        const observacionesNodo = document.createTextNode("Observaciones");
        labelObservaciones.setAttribute("for", "observaciones" + (i + 1));
        labelObservaciones.className = "form-label";
        labelObservaciones.appendChild(observacionesNodo);

        const textareaObservaciones = document.createElement("textarea");
        textareaObservaciones.id = "observaciones" + (i + 1);
        textareaObservaciones.className = "form-control";
        textareaObservaciones.name = "observaciones" + (i + 1);
        textareaObservaciones.rows=4;
        textareaObservaciones.cols=50;

        fieldsetD.appendChild(document.createElement("br"));
        fieldsetD.appendChild(labelObservaciones);
        fieldsetD.appendChild(textareaObservaciones);

        fieldset.appendChild(fieldsetD);
        contenedor.appendChild(fieldset);
    }
    const aceptarCondiciones = document.getElementById("aceptacion");
    aceptarCondiciones.style.display = "block";

});