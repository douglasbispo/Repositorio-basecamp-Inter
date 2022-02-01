const prompt = require('prompt-sync')()

function comparacaoNumeros() {
    var n1 = Number(prompt("Digite o um número: "));
    var n2 = Number(prompt("Digite outro número: "));

    if (!n1 || !n2) {
        console.log("ERRO - Valor invalido! Digite novamente");
        comparacaoNumeros();
    }
    else {
        function compararNumeros(n1, n2) {
            if (n1 === n2) {
                return `Os números ${n1} e ${n2} são iguais`;
            }

            return `Os números ${n1} e ${n2} não são iguais`;
        }

        function somarNumeros(n1, n2) {
            const soma = n1 + n2;

            if (soma > 10 && soma < 20) {
                return `Sua soma é ${soma}, que é maior que 10 e menor que 20`;
            }
            else if (soma > 20) {
                return `Sua soma é ${soma}, que é maior que 10 e maior que 20`;
            }
            else if (soma < 10) {
                return `Sua soma é ${soma}, que é menor que 10 e menor que 20`;
            }
            else if (soma === 10) {
                return `Sua soma é ${soma}, que é igual a 10 e menor que 20`;
            }
            else if (soma === 20) {
                return `Sua soma é ${soma}, que é maior que 10 e igual a 20`;
            }
        }

        console.log(compararNumeros(n1, n2) + ". " + somarNumeros(n1, n2) + ".");

        return compararNumeros(n1, n2) + ". " + somarNumeros(n1, n2) + ".";
    }
}


console.log(comparacaoNumeros());

