function validarArray(array, numero) {

    try {
        if (!array || !numero)
            throw new ReferenceError("É preciso enviar os parametros");

        if (typeof array !== "object")
            throw new TypeError("Array invalido!");

        if (typeof numero !== "number")
            throw new TypeError("Número invalido!");

        if (array.length !== numero)
            throw new RangeError("Tamanho invalido!");

        return array;
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Esse error é um ReferenceError");
            console.log(e.message);
        }
        else if (e instanceof TypeError) {
            console.log("Esse error é um TypeError");
            console.log(e.message);
        }
        else if (e instanceof RangeError) {
            console.log("Esse error é um RangeError");
            console.log(e.message);
        }
        else {
            console.log("Tipo de error não esperado: " + e);
        }

    }
}

console.log(validarArray([1], "1"));