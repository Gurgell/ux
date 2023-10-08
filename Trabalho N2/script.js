let valorVisor = "";
let operacao = "";
let primeiroNumero = 0;

function mostrarVisor(number) {
    valorVisor += number;
    document.getElementById("visor").value = valorVisor;
}

function limparVisor() {
    //Caso o usuário tenha dividido por zero, basta ele inserir o último número novamente e clicar no "="
    if (dividiuPorZero === true){
        valorVisor = "";
        document.getElementById("visor").value = valorVisor;
        operacao = "/";
        return;
    }
    valorVisor = "";
    document.getElementById("visor").value = valorVisor;
    operacao = "";
    primeiroNumero = 0;
}

function definirOperacao(operador) {
    operacao = operador;
    primeiroNumero = parseInt(valorVisor);
    valorVisor = "";
    document.getElementById("visor").value = valorVisor;
}

function calcular() {
    let segundoNumero = parseInt(valorVisor);
    let result;

    switch (operacao) {
    case "+":
        result = primeiroNumero + segundoNumero;
        break;
    case "-":
        result = primeiroNumero - segundoNumero;
        break;
    case "*":
        result = primeiroNumero * segundoNumero;
        break;
    case "/":
        if (segundoNumero === 0) {
            alert("Impossível dividir por 0");
            dividiuPorZero = true;
            limparVisor();
            return;
        }
        result = primeiroNumero / segundoNumero;
        break;
    }

    valorVisor = result.toString();
    document.getElementById("visor").value = valorVisor;
    operacao = "";
    primeiroNumero = 0;
    }