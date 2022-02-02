class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return "Saldo abaixo do valor solicitado!";
        }
        else if (valor < 0) {
            return "Valor Invalido!";
        }

        return this._saldo = this._saldo - valor;
    }

    depositar(valor) {
        if (valor < 0) {
            return "Valor invalido!";
        }

        return this._saldo = this._saldo + valor;
    }
}


class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero)
        this._cartaoCredito = cartaoCredito;
        this.tipo = "Conta corrente";
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}


class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = "Conta poupança";
    }
}


class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = "Conta universitaria";
    }

    sacar(valor) {
        if (valor > 500) {
            return "Valor invalido! Não é possivel sacar mais que 500 reais";
        }
        else if (valor > this._saldo) {
            return "Saldo abaixo do valor solicitado!";
        }
        else if (valor < 0) {
            return "Valor Invalido!";
        }

        return this._saldo = this._saldo - valor;
    }
}
