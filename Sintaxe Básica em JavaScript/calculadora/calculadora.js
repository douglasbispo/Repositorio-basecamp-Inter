function calculadora() {
    const operacao = Number(prompt("Escolha uma operação:z\n 1- Soma (+)\n 2- Subtração (-)\n 3- multiplicação (*)\n 4- Divisão real (/)\n 5- Divisão Inteira (%)\n 6- Potenciação (**)\n 7- Para encerrar "));


    if (!operacao || operacao >= 8 || operacao <= 0) {
        alert("Erro - Operação invalida! digite novamente: ");
        calculadora();
    } else if (operacao == 7) {
        alert("Até mais");
    } else {
        var numero1 = Number(prompt("Digite o primeiro valor: "));
        var numero2 = Number(prompt("Digite o primeiro valor: "));
        var resultado;

        function soma() {
            resultado = numero1 + numero2;
            alert(`${numero1} + ${numero2} = ${resultado}`);
            novaOperacao();
        }

        if (!numero1) {
            alert("Erro - parâmetro invalido!");
            calculadora();
        } else if (!numero2) {
            alert("Erro - parâmetro invalido!");
            calculadora();
        } else {

            function subtração() {
                resultado = numero1 - numero2;
                alert(`${numero1} - ${numero2} = ${resultado}`);
                novaOperacao();
            }

            function multiplicacao() {
                resultado = numero1 * numero2;
                alert(`${numero1} * ${numero2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoReal() {
                resultado = numero1 / numero2;
                alert(`${numero1} / ${numero2} = ${resultado}`);
                novaOperacao();
            }

            function divisaointeira() {
                resultado = numero1 % numero2;
                alert(`O resto da divisão entre ${numero1} e ${numero2} é igual a ${resultado}`);
                novaOperacao();
            }

            function potenciacao() {
                resultado = numero1 ** numero2;
                alert(`${numero1} elevado a ${numero2} é igual a ${resultado}`);
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = prompt("Deseja fazer outra operção?\n1 - Sim\n2 - Não");

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert("Até mais");
                } else {
                    alert("Opcão invalida! digite novamente: ");
                    novaOperacao();
                }
            }


            switch (operacao) {
                case 1:
                    soma();
                    break;
                case 2:
                    subtração();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisaoReal();
                    break;
                case 5:
                    divisaointeira();
                    break;
                case 6:
                    potenciacao();
                    break;
            }


        }
    }
}


calculadora();