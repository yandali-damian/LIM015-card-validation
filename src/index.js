import validator from './validator.js';

//console.log(validator);

//pruebas unitarias
//const test = '2234444606';
//console.log(validator.isValid(test));
//console.log(validator.maskify(test));

//manejo del input
document.getElementById("cargar-tarjeta").addEventListener("click", () => {
    document.getElementById("validar").style.display = "block";
    document.getElementById("validar-nuevo").style.display = "none";
    document.getElementById("presentacion").style.display = "none";

});

//manejo de boton Validar 
document.getElementById("btn-validar").addEventListener("click", (e) => {
    //(e): parametro para acceder a los metodos del evento
    e.preventDefault();
    //Evita que vaya a la accion del formulario (form)
    //validar tarjeta correcta o incorrecta
    let creditCardNumber = document.getElementById("numero-tarjeta").value;
    let isValid = validator.isValid(creditCardNumber);
    let mensajeValid = "Invalido";
    if (isValid) {
        mensajeValid = "Valido";
    }
    document.getElementById("resultado-tarjeta").innerHTML = "La tarjeta ingresada es: " + mensajeValid;
    //enmascarar numero de tarjeta
    let maskify = validator.maskify(creditCardNumber);
    document.getElementById("num-tarjeta").innerHTML = maskify;

    // mostramos y ocultamos el div 
    document.getElementById("presentacion").style.display = "none";
    document.getElementById("validar").style.display = "none";
    document.getElementById("validar-nuevo").style.display = "block";

    //accion donde se captura el nombre
    let name = document.getElementById("nombre").value;
    document.getElementById("validar-nombre").innerHTML = name;

});

//manejo de boton Validar nueva Tarjeta
document.getElementById("nueva-tarjeta").addEventListener("click", () => {
    document.getElementById("presentacion").style.display = "block";
    document.getElementById("validar-nuevo").style.display = "none";
    document.getElementById("validar").style.display = "none";

    //Limpiar contenido
    document.getElementById("frmValidarTarjeta").reset();
    //metodo reset() limpiamos el contedido de html
});


//funcion para validar que el input solo acepte numeros
document.getElementById("numero-tarjeta", "cvv-tarjeta").addEventListener("keypress", function(event) {
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