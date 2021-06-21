import validator from './validator.js';

//creamos la funcion para el boton  "cargar tarjeta"
document.getElementById("cargar-tarjeta").addEventListener("click", () => {
    /* buscar el boton por el ID e implementar su evento click*/
    document.getElementById("logocabeza").style.display = "block";
    document.getElementById("validar").style.display = "block";
    document.getElementById("validar-nuevo").style.display = "none";
    document.getElementById("presentacion").style.display = "none";

});

//creamos la funcion para el boton  "validar tarjeta"
document.getElementById("btn-validar").addEventListener("click", (e) => {
    //(e): parametro para acceder a los metodos del evento
    e.preventDefault();
    //Evita que vaya a la accion del formulario (form)
    let creditCardNumber = document.getElementById("numero-tarjeta").value; /* caturamos el valor del parametro */
    let cvvTarjeta = document.getElementById("cvv-tarjeta").value;

    if (creditCardNumber == "" || cvvTarjeta == "") {
        alert("LLene los campos solicitados");
        return;
    }

    let mensajetipotarjeta = validator.getIssuer(creditCardNumber);
    let validotipotarjeta = true;

    if (mensajetipotarjeta == "") {
        document.getElementById("tipoTarjeta").innerHTML = "Por ahora no se acepta el tipo de tarjeta, recomendamos ingresar MasterCard o Visa";
        validotipotarjeta = false;
    } else {
        document.getElementById("tipoTarjeta").innerHTML = "Tipo Tarjeta : " + mensajetipotarjeta;
    }

    if (validotipotarjeta) {
        //validar tarjeta correcta o incorrecta

        let isValid = validator.isValid(creditCardNumber);
        let mensajeValid = "Invalido";

        if (isValid) {
            mensajeValid = "Valido";
        }

        document.getElementById("resultado-tarjeta").innerHTML = "La tarjeta ingresada es: " + mensajeValid;

        //enmascarar numero de tarjeta
        let maskify = validator.maskify(creditCardNumber);
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
    document.getElementById("logocabeza").style.display = "block";
    document.getElementById("presentacion").style.display = "none";
    document.getElementById("validar-nuevo").style.display = "none";
    document.getElementById("validar").style.display = "block";

    //Limpiar contenido
    document.getElementById("frmValidarTarjeta").reset();
    document.getElementById("num-tarjeta").innerHTML = "";
    document.getElementById("resultado-tarjeta").innerHTML = "";
    //metodo reset() limpiamos el contedido de html
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
    //metodo reset() limpiamos el contedido de html
});

//funcion para validar que el input solo acepte numeros
document.getElementById("numero-tarjeta").addEventListener("keypress", function(event) {
    //primer parametro reconocer que evento va a realizar, segun lo que realice el siguiente parametro va a ejecutar 
    function solonumeros(evt) {
        let charCode = (evt.which) ? evt.which : evt.keyCode;
        // charCode recupera lo escrito "? if coto"
        if (charCode == 46 || charCode > 31 && (charCode < 48 || charCode > 57)) {
            evt.preventDefault();
            return false;
        }
        return true;

    }
    return solonumeros(event);
}, false);