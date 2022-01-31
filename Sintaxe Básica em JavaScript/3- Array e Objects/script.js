// como declarar um array
/* let array = ["Douglas", 1, true];
console.log(array); */

// Pode quardar vários tipos de dados
/* let array2 = ["Douglas", 1, false, ['array1', 'oxente'], ['array2', ['array3']]]; */
/* console.log(array2); */

// forEach (indice e item do array)
/* array2.forEach(function (item, index) { console.log(item, index) }); */

// push (adicionar)
/* array2.push("Novo item");
console.log(array2); */

// pop (apagar)
/* array2.pop();
console.log(array2); */

// shift (apaga o primeiro valor da string)
/* array2.shift();
console.log(array2); */

// unshift (adiciona um item no inicio do array)
/* array2.unshift("Um novo item no inicio");
console.log(array2); */

// indexOf (retorna o indice de um valor)
/* console.log(array2.indexOf("Douglas")); */

// splice (remove ou substitui um item pelo indice)
/* array2.splice(0, 3);
console.log(array2); */

// slice (retorna uma parte de um array existente)
/* let a = array2.slice(0, 3);
console.log(a); */


/* _______________________________________________________________ */
/* Objects */

let object = { 
    string: "string", 
    number: 1, 
    boolean: true, 
    array: ["Array"], 
    objectInterno: {objectInterno: "obejeto interno"} 
}
/* console.log(object.boolean);

var string = object.number;
console.log(string);

var objectInterno = object.objectInterno;
console.log(objectInterno); */

var {array, string, boolean} = object;
console.log(array, string, boolean);