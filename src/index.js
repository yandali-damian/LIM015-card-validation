import validator from './validator.js';

//console.log(validator);

//pruebas unitarias
var test = '4556364607935606';
console.log(validator.isValid(test));
console.log(validator.maskify(test));

//manejo del input
document.getElementById("cargar-tarjeta").addEventListener("click", () => {
    document.getElementById("validar").style.display = "block";
    document.getElementById("validar-nuevo").style.display = "none";
    document.getElementById("presentacion").style.display = "none";
    //Limpiar contenido
    document.getElementById("frmValidarTarjeta").reset();
});

//manejo de boton Validar 
document.getElementById("btn-validar").addEventListener("click", (e) => {
    e.preventDefault(); //Evita que vaya a la accion del formulario
    document.getElementById("presentacion").style.display = "none";
    document.getElementById("validar").style.display = "none";
    document.getElementById("validar-nuevo").style.display = "block";

    //accion donde se captura el nombre
    let name = document.getElementById("nombre").value;
    document.getElementById("validar-nombre").innerHTML = name;

    //validar tarjeta correcta o incorrecta
    var creditCardNumber = document.getElementById("numero-tarjeta").value;
    var isValid = validator.isValid(creditCardNumber);
    var mensajeValid = "Invalido";
    if (isValid) {
        mensajeValid = "Valido";
    }

    document.getElementById("resultado-tarjeta").innerHTML = "La tarjeta ingresada es: " + mensajeValid;
});

//manejo de boton Validar nueva Tarjeta
document.getElementById("nueva-tarjeta").addEventListener("click", () => {
    document.getElementById("presentacion").style.display = "block";
    document.getElementById("validar-nuevo").style.display = "none";
    document.getElementById("validar").style.display = "none";
    //Limpiar contenido
    document.getElementById("frmValidarTarjeta").reset();
});


//funcion para validar que el input solo acepte numeros
document.getElementById("numero-tarjeta").addEventListener("keypress", function(event) {
    function solonumeros(evt) {
        let charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode == 46 || charCode > 31 && (charCode < 48 || charCode > 57)) {
            evt.preventDefault();
            return false;
        }
        return true;

    }
    return solonumeros(event);
}, false);