const Decimal = document.querySelector(".Decimal");

const CalculadoraDeBinarios = document.createElement("div");
CalculadoraDeBinarios.classList.add("filho");

const CalculadoraUm = document.createElement("h2");
CalculadoraUm.textContent = "Converta De Decimal Para Binário";

const InputDaCalculadoraUm = document.createElement("input");
InputDaCalculadoraUm.id = "decimal";
InputDaCalculadoraUm.placeholder = "Digite um número decimal";
InputDaCalculadoraUm.type = "text";

const BotaoDaCalculadoraUm = document.createElement("button");
BotaoDaCalculadoraUm.id = "teste";
BotaoDaCalculadoraUm.textContent = "Converter";

const ParagrafoDaCalculadoraUm = document.createElement("p");
ParagrafoDaCalculadoraUm.id = "resultadoDecimal";

CalculadoraDeBinarios.appendChild(CalculadoraUm);
CalculadoraDeBinarios.appendChild(InputDaCalculadoraUm);
CalculadoraDeBinarios.appendChild(BotaoDaCalculadoraUm);
CalculadoraDeBinarios.appendChild(ParagrafoDaCalculadoraUm);

Decimal.appendChild(CalculadoraDeBinarios);

// Adiciona a calculadora de Binário para Decimal
const Binario = document.querySelector(".Binario");

const ConvensorDeBinario = document.createElement("div");
ConvensorDeBinario.classList.add("filho");

const TITULO = document.createElement("h2");
TITULO.textContent = "Converta De Binário Para Decimal";

const Input = document.createElement("input");
Input.id = "binarioInput";
Input.placeholder = "Digite um número binário";
Input.type = "text";

const BOTÃO = document.createElement("button");
BOTÃO.id = "testedois";
BOTÃO.textContent = "Converter";

const PARAGRAFO = document.createElement("p");
PARAGRAFO.id = "resultadoBinario";

ConvensorDeBinario.appendChild(TITULO);
ConvensorDeBinario.appendChild(Input);
ConvensorDeBinario.appendChild(BOTÃO);
ConvensorDeBinario.appendChild(PARAGRAFO);

Binario.appendChild(ConvensorDeBinario);
const soma = document.querySelector(".soma");

const CalculadoraDeSoma = document.createElement("div");
CalculadoraDeSoma.classList.add("filho");

const TituloCalculadoraSoma = document.createElement("h2");
TituloCalculadoraSoma.textContent = "Calculadora";

const InputNumeroUm = document.createElement("input");
InputNumeroUm.id = "numbers";
InputNumeroUm.placeholder = "Digite dois números com a operação";
InputNumeroUm.type = "text";

const BotaoSoma = document.createElement("button");
BotaoSoma.id = "testetres";
BotaoSoma.textContent = "Somar";

const ResultadoDeSoma = document.createElement("p");
ResultadoDeSoma.id = "resultadoSoma";

CalculadoraDeSoma.appendChild(TituloCalculadoraSoma);
CalculadoraDeSoma.appendChild(InputNumeroUm);
CalculadoraDeSoma.appendChild(BotaoSoma);
CalculadoraDeSoma.appendChild(ResultadoDeSoma);

soma.appendChild(CalculadoraDeSoma);
// Função de conversão Binário para Decimal
function binarioParaDecimal(binario) {
    for (let i = 0; i < binario.length; i++) {
        if (binario[i] !== '0' && binario[i] !== '1') {
            return "Por favor, insira um número binário válido";
        }
    }

    let decimal = 0;
    let potencia = 0;

    for (let i = binario.length - 1; i >= 0; i--) {
        if (binario[i] === '1') {
            decimal += Math.pow(2, potencia);
        }
        potencia++;
    }
    return decimal;
}

document.getElementById("testedois").addEventListener("click", function () {
    let binario = document.getElementById('binarioInput').value;
    let resultado = binarioParaDecimal(binario);

    if (typeof resultado === 'string') {
        document.getElementById('resultadoBinario').textContent = resultado;
    } else {
        document.getElementById('resultadoBinario').textContent = "Decimal: " + resultado;
    }
});

// Função de conversão Decimal para Binário
function decimalParaBinario(decimal) {
    if (decimal === 0) {
        return '0';
    }

    let binario = '';
    while (decimal > 0) {
        binario = (decimal % 2) + binario;
        decimal = Math.floor(decimal / 2);
    }

    return binario;
}

document.getElementById("teste").addEventListener("click", function () {
    const decimal = parseInt(document.getElementById('decimal').value);

    if (isNaN(decimal)) {
        document.getElementById('resultadoDecimal').textContent = 'Por favor, insira um número válido.';
    } else {
        const binario = decimalParaBinario(decimal);
        document.getElementById('resultadoDecimal').textContent = `O binário de ${decimal} é ${binario}`;
    }
});


document.getElementById("testetres").addEventListener("click", function () {
    const input = document.getElementById('numbers').value;
    // Separar os números pelo sinal de +
    const numbers = input.split('+').map(num => num.trim());
    // Concatenar os números
    const concatenatedResult = numbers[0] + numbers[1];
    // Mostrar o resultado concatenado
    document.getElementById('resultadoSoma').textContent = `Concatenado: ${concatenatedResult}`;
});
