const saldo = 500;

const listaProdutos = [
    {
        nome: "Arroz",
        preco: 4
    },
    {
        nome: "Feijão",
        preco: 5
    },
    {
        nome: "Maçã",
        preco: 1
    },
    {
        nome: "Macarrão",
        preco: 3
    },
]

function calcularSaldo(lista, saldo) {
    return lista.reduce(function (accumulator, value) {
        return accumulator - value.preco;
    }, saldo)
}

console.log(calcularSaldo(listaProdutos, saldo));