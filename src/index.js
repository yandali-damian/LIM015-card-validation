import validator from './validator.js';

//funcion para el boton  "cargar-tarjeta"
document.getElementById("cargar-tarjeta").addEventListener("click", () => {
    /* buscar el boton por el ID e implementar su evento click*/
    document.getElementById("logocabeza").style.display = "block";
    document.getElementById("validar").style.display = "block";
    document.getElementById("validar-nuevo").style.display = "none";
    document.getElementById("presentacion").style.display = "none";
});

//funcion para el boton  "validar tarjeta"
document.getElementById("btn-validar").addEventListener("click", (e) => {
    e.preventDefault();
    //(e): parametro para acceder a los metodos del evento y detener una acción
    let creditCardNumber = document.getElementById("numero-tarjeta").value;
    /* caturamos el valor del parametro */
    let cvvTarjeta = document.getElementById("cvv-tarjeta").value;

    if (creditCardNumber == "" || cvvTarjeta == "") {
        alert("LLene los campos solicitados");
        return; // termina la funcion
    }

    let getIssuer = validator.getIssuer(creditCardNumber);
    //ingresamos al metodo getIssuer para veficar la franquicia  de la tarjeta
    let validotipotarjeta = true; //declaramos una variable booleana
    if (getIssuer == "") {
        document.getElementById("tipoTarjeta").innerHTML = "Por ahora no se acepta el tipo de tarjeta, recomendamos ingresar MasterCard o Visa";
        validotipotarjeta = false;
    } else {
        document.getElementById("tipoTarjeta").innerHTML = "Tipo Tarjeta : " + getIssuer;
    }

    if (validotipotarjeta) {

        let isValid = validator.isValid(creditCardNumber);
        //ingresamos al objeto y a la funcion y almacenamos el  resultado en una variable
        let mensajeValid = "Invalido";
        //declaro la variable para el resultado 

        if (isValid) {
            mensajeValid = "Valido";
            document.getElementById("nueva-tarjeta").innerHTML = "Guardar Tarjeta";
        } else {
            document.getElementById("nueva-tarjeta").innerHTML = "Validar Nuevo";
        }

        document.getElementById("resultado-tarjeta").innerHTML = "La tarjeta ingresada es: " + mensajeValid;
        //enmascarar numero de tarjeta
        let maskify = validator.maskify(creditCardNumber);
        //ingresamos al objeto y a la funcion y almacenamos el  resultado en una variable
        document.getElementById("num-tarjeta").innerHTML = maskify;
    }
    // mostramos y ocultamos el div 
    document.getElementById("logocabeza").style.display = "block";
    document.getElementById("presentacion").style.display = "none";
    document.getElementById("validar").style.display = "none";
    document.getElementById("validar-nuevo").style.display = "block";

    //accion donde se captura el nombre
    let name = document.getElementById("nombre").value;
    document.getElementById("validar-nombre").innerHTML = name;

});

//manejo de boton Validar nueva Tarjeta
document.getElementById("nueva-tarjeta").addEventListener("click", () => {
    let btnnuevatarjeta = document.getElementById("nueva-tarjeta").innerText;

    if (btnnuevatarjeta == "Guardar Tarjeta") {
        alert("Se guardó correctamente su tarjeta!");
        document.getElementById("logocabeza").style.display = "none";
        document.getElementById("presentacion").style.display = "block";
        document.getElementById("validar-nuevo").style.display = "none";
        document.getElementById("validar").style.display = "none";

        //Limpiar contenido
        document.getElementById("frmValidarTarjeta").reset();
        document.getElementById("num-tarjeta").innerHTML = "";
        document.getElementById("resultado-tarjeta").innerHTML = "";
    } else {
        document.getElementById("logocabeza").style.display = "block";
        document.getElementById("presentacion").style.display = "none";
        document.getElementById("validar-nuevo").style.display = "none";
        document.getElementById("validar").style.display = "block";

        //Limpiar contenido
        document.getElementById("frmValidarTarjeta").reset();
        document.getElementById("num-tarjeta").innerHTML = "";
        document.getElementById("resultado-tarjeta").innerHTML = "";
    }
});

document.getElementById("btn-salir").addEventListener("click", () => {
    document.getElementById("logocabeza").style.display = "none";
    document.getElementById("presentacion").style.display = "block";
    document.getElementById("validar-nuevo").style.display = "none";
    document.getElementById("validar").style.display = "none";

    //Limpiar contenido
    document.getElementById("frmValidarTarjeta").reset();
    document.getElementById("num-tarjeta").innerHTML = "";
    document.getElementById("resultado-tarjeta").innerHTML = "";
});

//funcion para validar que el input solo acepte numeros
document.getElementById("numero-tarjeta").addEventListener("keypress", (event) => {
    //primer parametro reconocer que evento va a realizar, segun lo que realice el siguiente parametro va a ejecutar 
    let charCode = (event.which) ? event.which : event.keyCode;
    // charCode recupera lo escrito "? if coto"
    if ((charCode == 46 || charCode > 31) && (charCode < 48 || charCode > 57)) { //Si es una letra se detiene el evento
        event.preventDefault(); //detiene la accion
        return false;
    }
    return true;
}); //culmina la funccion