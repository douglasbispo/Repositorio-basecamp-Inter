const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function retornaPares(array) {
    return array.filter((numeros) => numeros % 2 === 0);
}

console.log(retornaPares(array));