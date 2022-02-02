const quantidade = [4, 5, 6];

const arroz = {
    preco: 4
}

function calcularPreco(array, thisArg) {

    const myMap = array.map(function (item) {
        return item * this.preco;
    }, thisArg);

    return myMap;
}

console.log("Quantidade: " + quantidade);
console.log("Preço: " + calcularPreco(quantidade, arroz));