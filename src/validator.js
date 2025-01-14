const validator = { //creamos el objeto validator

    // funcnion para validar el numero de tarjeta
    isValid(creditCardNumber) { //validamos el numero ingresado

        let array = creditCardNumber.split(""); //cada digito de la tarjeta colocamos en un array
        let arrayInvertido = array.reverse(); //invertimos el array
        let sumaTotal = 0;

        for (let i = 0; i < arrayInvertido.length; i++) { // recorremos el arreglo invertido
            if (i % 2 != 0) { //verificamos si es una posicion par
                let opr = parseInt(arrayInvertido[i]) * 2; //recupera un numero de latarjeta segun la posiscion del arreglo

                if (opr >= 10) {
                    let numArray = opr.toString().split("");
                    let sumaDigitos = 0;
                    // opr = numArray.reduce(function(a, b) { //metodo reduce sumamos los elementos del arreglo donde a=acumulador y b=valor actual
                    //     return parseInt(a) + parseInt(b);
                    // }, 0);
                    for (let index = 0; index < numArray.length; index++) {
                        sumaDigitos = sumaDigitos + parseInt(numArray[index]);
                    }
                    opr = sumaDigitos;
                }

                sumaTotal = sumaTotal + opr; //incremento mi contador 
            } else {
                sumaTotal = sumaTotal + parseInt(arrayInvertido[i]); //incremento mi contador 
            }

        }


        let result = sumaTotal % 10; //calculamos el modulo

        if (result == 0)
            return true;
        else
            return false;

    },

    // funcnion para enmascarar el numero de tarjeta
    maskify(maskify) {
        let nummask = "";

        for (let i = 0; i < maskify.length; i++) { // capturamos la cantidada de caracteres ingresados
            if (i <= maskify.length - 5) {
                nummask = nummask + "#"; //empezamos a concatenar
            } else {
                nummask = nummask + maskify[i];
            }
        }
        return nummask;
    },

    //funcion para poder verificar la franquicia de la tgarjeta
    getIssuer(creditCardNumber) {
        let getIssuer = "";

        if (creditCardNumber[0] == "4") {
            getIssuer = "Visa";
        } else if ((creditCardNumber[0] == "5" && creditCardNumber[1] == "1") || (creditCardNumber[0] == "5" && creditCardNumber[1] == "5")) {
            getIssuer = "MasterCard";
        }

        return getIssuer;
    }
};


export default validator;