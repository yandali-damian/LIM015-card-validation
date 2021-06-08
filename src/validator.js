const validator = { //creamos el objeto validator
    // ...
    isValid(creditCardNumber) {
        let array = creditCardNumber.split(""); //cada digito de la tarjeta colocamos en un array
        let sumaTotal = 0;
        //aqui se llena el algoritmo
        let arrayInvertido = array.reverse(); //invertimos el array

        for (let i = 0; i < arrayInvertido.length; i++) { // 0 1 2 3  // 5849
            if (i % 2 != 0) {
                let opr = parseInt(arrayInvertido[i]) * 2;

                if (opr >= 10) {
                    opr = sumDigits(opr);
                }

                sumaTotal = sumaTotal + opr;
            } else {
                sumaTotal = sumaTotal + parseInt(arrayInvertido[i]);
            }

        }


        let result = sumaTotal % 10;

        if (result == 0)
            return true;
        else
            return false;

    },

    maskify(maskify) {
        let nummak = "";

        for (let i = 0; i < maskify.length; i++) {
            if (i <= maskify.length - 5) {
                nummak = nummak + "#";
            } else {
                nummak = nummak + maskify[i];
            }
        }
        return nummak;
    }
};

function sumDigits(n) { //funcion para sumar los digitos
    let numArray = n.toString().split("");

    let sum = numArray.reduce(function(a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    return sum;
}

export default validator;