const myArray = [1, 2, 3, 4, 5];

function somarNumeros(array) {
    return array.reduce((accumulator, value) => accumulator + value);
}

console.log(myArray);
console.log("A soma dos números do array é: " + somarNumeros(myArray));