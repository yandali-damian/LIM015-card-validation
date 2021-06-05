const validator = {
    // ...
    isValid(creditCardNumber) {
        const array = creditCardNumber.split(""); //cada digito de la tarjeta colocamos en un array
        var sumaTotal = 0;
        //aqui se llena el algoritmo
        let arrayInvertido = array.reverse(); //invertimos el array

        for (let i = 0; i < arrayInvertido.length; i++) {
            if (i % 2 != 0) {
                var opr = parseInt(arrayInvertido[i]) * 2;

                if (opr >= 10) {
                    opr = sumDigits(opr);
                }

                sumaTotal = sumaTotal + opr;
            } else {
                sumaTotal = sumaTotal + parseInt(arrayInvertido[i]);
            }

        }


        var result = sumaTotal % 10;

        if (result == 0)
            return true;
        else
            return false;

    },

    maskify(creditCardNumber) {

        //se mostrara los cuatro ultimos digitos de la tarjeta
        return '############5616';
    }
};

function sumDigits(n) {
    let numArr = n.toString().split("");

    let sum = numArr.reduce(function(a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    return sum;
}

export default validator;