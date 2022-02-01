function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos
        } anos de idade.`;
}

const pessoa1 = {
    nome: "Douglas",
    idade: 22
}
const pessoa2 = {
    nome: "João",
    idade: 31
}
const pessoa3 = {
    nome: "Carla",
    idade: 17
}
const animal = {
    nome: "Shrek",
    idade: 2,
    tipo: "Cachorro"
}

console.log(calculaIdade.call(pessoa1, 15));
console.log(calculaIdade.apply(pessoa3, [20]));