console.log("ola back");
// hello.js

// Importa o módulo 'os' para informações do sistema operacional
const os = require('os');

// Mensagem de boas-vindas personalizada
const nome = "Kayke"; // Você pode alterar para seu nome
console.log(`Olá, ${nome}! Bem-vindo ao Node.js.`);

// Exibe a versão do Node.js instalada
console.log(`Versão do Node.js: ${process.version}`);

// Exibe o sistema operacional que está rodando
console.log(`Sistema operacional: ${os.type()} ${os.release()}`);

// Exibe o caminho da pasta atual
console.log(`Caminho da pasta atual: ${process.cwd()}`);
// calculadora.js

// Captura os argumentos passados pelo terminal
const args = process.argv.slice(2);

// Valida se os 3 argumentos foram informados
if (args.length < 3) {
    console.log("Uso: node calculadora.js <número1> <operador> <número2>");
    process.exit(1);
}

const [num1Str, operador, num2Str] = args;

// Converte os números para float
const num1 = parseFloat(num1Str);
const num2 = parseFloat(num2Str);

// Valida se os números são válidos
if (isNaN(num1) || isNaN(num2)) {
    console.log("Erro: Ambos os valores devem ser números válidos.");
    process.exit(1);
}

let resultado;

// Realiza a operação escolhida
switch (operador) {
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case 'mult':
        resultado = num1 * num2;
        break;
    case '/':
        if (num2 === 0) {
            console.log("Erro: Divisão por zero não é permitida.");
            process.exit(1);
        }
        resultado = num1 / num2;
        break;
    default:
        console.log("Erro: Operador inválido. Use +, -, * ou /.");
        process.exit(1);
}

// Exibe o resultado formatado
console.log(`${num1} ${operador} ${num2} = ${resultado}`);
