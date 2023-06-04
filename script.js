var botao = document.getElementById("lista3ex1a");
botao.addEventListener("click", listaTres1a);

function listaTres1a() {
    // a) Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.
    const numero = parseInt(prompt("Digite um número:"));

    let tabuada = `Tabuada de multiplicar do número ${numero}:\n`;

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        tabuada += `${numero} x ${i} = ${resultado}\n`;
    }

    alert(tabuada);
}
var botao = document.getElementById("lista3ex1b");
botao.addEventListener("click", listaTres1b);

function listaTres1b() {
    // b) Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).
    let soma = 0;

    for (let i = 1; i <= 100; i++) {
        soma += i;
    }
    alert("O total da soma é: " + soma);
}

var botao = document.getElementById("lista3ex1c");
botao.addEventListener("click", listaTres1c);

function listaTres1c() {
    //     c) Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
    // 1 até 500.
    let somatorio = 0;

    for (let i = 1; i <= 500; i++) {
        if (i % 2 === 0) {
            somatorio += i;
        }
    }
    alert("O somatório dos valores pares é: " + somatorio);
}

var botao = document.getElementById("lista3ex1d");
botao.addEventListener("click", listaTres1d);

function listaTres1d() {
    // d) Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar
    // se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução
    // se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo.
    for (let i = 0; i <= 20; i++) {
        if (i % 2 !== 0) {
            alert("Valor ímpar: " + i);
        }
    }
}

var botao = document.getElementById("lista3ex1e");
botao.addEventListener("click", listaTres1e);

function listaTres1e() {
    // e) Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser
    // considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que
    // neste exercício não pode ser utilizado o operador de exponenciação.
    let resultado = 1;

    for (let expoente = 0; expoente <= 15; expoente++) {
        for (let i = 0; i < expoente; i++) {
            resultado *= 3;
        }

        alert(`3^${expoente} = ${resultado}`);
        resultado = 1;
    }
}

var botao = document.getElementById("lista3ex1f");
botao.addEventListener("click", listaTres1f);

function listaTres1f() {
    //     f) Elaborar um programa que apresente como resultado o valor de uma potência de uma base
    // qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor
    // do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação
    function calcularPotencia(base, expoente) {
        let resultado = 1;

        for (let i = 0; i < expoente; i++) {
            resultado *= base;
        }

        return resultado;
    }

    const base = parseFloat(prompt("Digite o valor da base:"));
    const expoente = parseInt(prompt("Digite o valor do expoente:"));

    const potencia = calcularPotencia(base, expoente);

    alert(`${base} elevado a ${expoente} é igual a ${potencia}`);

}

var botao = document.getElementById("lista3ex1g");
botao.addEventListener("click", listaTres1g);

function listaTres1g() {
    // g) Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de
    // Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza
    // pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo
    // valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo
    // é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc.
    let termo1 = 1;
    let termo2 = 1;

    alert(termo1); // Primeiro termo
    alert(termo2); // Segundo termo

    for (let i = 3; i <= 15; i++) {
        let proximoTermo = termo1 + termo2;
        alert(proximoTermo);

        termo1 = termo2;
        termo2 = proximoTermo;
    }

}

var botao = document.getElementById("lista3ex1h");
botao.addEventListener("click", listaTres1h);

function listaTres1h() {
    // h) Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de
    // 10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O
    // programa deve apresentar os valores das duas temperaturas. A fórmula de conversão
    // é
    // 5
    // 9 +160
    // =
    // C
    // F , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

    for (let celsius = 10; celsius <= 100; celsius += 10) {
        let fahrenheit = (celsius * 9 / 5) + 32;
        alert(`${celsius} graus Celsius = ${fahrenheit} graus Fahrenheit`);
    }
}

var botao = document.getElementById("lista3ex1i");
botao.addEventListener("click", listaTres1i);

function listaTres1i() {
    //     i) Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do
    // somatório e a média aritmética dos valores lidos.
    let total = 0;

    for (let i = 1; i <= 10; i++) {
        let valor = parseFloat(prompt(`Digite o valor ${i}:`));
        total += valor;
    }

    let media = total / 10;

    alert(`Total: ${total}`);
    alert(`Média: ${media}`);
}

var botao = document.getElementById("lista3ex1j");
botao.addEventListener("click", listaTres1j);

function listaTres1j() {
    // j) Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores
    // pares situados na faixa numérica de 50 a 70.
    let soma = 0;
    let quantidade = 0;

    for (let num = 50; num <= 70; num++) {
        if (num % 2 === 0) {
            soma += num;
            quantidade++;
        }
    }

    let media = soma / quantidade;

    alert(`Soma: ${soma}`);
    alert(`Média: ${media}`);
}

var botao = document.getElementById("lista3ex1k");
botao.addEventListener("click", listaTres1k);

function listaTres1k() {
    // k) Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha,
    //     banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do
    //     nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área
    //     do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar
    //     calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor
    //     total acumulado da área residencial.
    let areaTotal = 0;
    let continuar = true;

    while (continuar) {
        let nome = prompt("Digite o nome do cômodo:");
        let largura = parseFloat(prompt("Digite a largura do cômodo (em metros):"));
        let comprimento = parseFloat(prompt("Digite o comprimento do cômodo (em metros):"));

        let area = largura * comprimento;
        areaTotal += area;

        alert(`A área do cômodo "${nome}" é de ${area} metros quadrados.`);

        let resposta = prompt("Deseja calcular a área de mais um cômodo? (SIM/NAO)");
        continuar = resposta.toUpperCase() === "SIM";
    }

    alert(`A área total da residência é de ${areaTotal} metros quadrados.`);
}

var botao = document.getElementById("lista3ex1l");
botao.addEventListener("click", listaTres1l);

function listaTres1l() {
    // l) Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo
    // seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo
    // usuário.

    let maior = Number.MIN_SAFE_INTEGER;
    let menor = Number.MAX_SAFE_INTEGER;
    let valor;

    do {
        valor = parseInt(prompt("Digite um valor positivo inteiro (ou um valor negativo para encerrar):"));

        if (valor >= 0) {
            if (valor > maior) {
                maior = valor;
            }

            if (valor < menor) {
                menor = valor;
            }
        }
    } while (valor >= 0);

    alert(`O maior valor informado foi: ${maior}`);
    alert(`O menor valor informado foi: ${menor}`);
}

