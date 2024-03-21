
import rl from 'readline-sync';
/*let dia = rl.questionInt("Informe o dia da semana: ")

switch (dia) {
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda-Feira")
        break
    case 3:
        console.log("Terça-Feira")
        break
    case 4:
        console.log("Quarta-Feira")
        break
    case 5:
        console.log("Quinta-Feira")
        break
    case 6:
        console.log("Sexta-Feira")
        break
    case 7: 
        console.log("Sábado")
        break
    
        default:
            console.log("A semana só tem 7 dias, digite um número de 1 a 7")
        break;
}


//2

let mes = rl.questionInt("Digite aqui o numero do mes: ")
switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Marco");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7: 
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Digite um número entre 1 e 12")
        break
}

//3
let number1 = rl.questionInt("Digite o primeiro numero desejado: ");
let number2 = rl.questionInt("Digite o segundo numero desejado: ");
let EscolherOperacao = rl.questionInt('Qual a operacao desejada? 1)+ 2)- 3)* 4)/');

if (EscolherOperacao === 1) {
    console.log(`O resultado da operação = ${number1+number2}`)
}
else if (EscolherOperacao === 2) {
    console.log(`O resultado da operação = ${number1-number2}`)
}
else if (EscolherOperacao === 3) {
    console.log(`O resultado da operação = ${number1*number2}`)
}
else if (EscolherOperacao === 4) {
    console.log(`O resultado da operação = ${number1/number2}`)
}
else {
    console.log('Digite uma operação desejada')
}

//4
let categoria = rl.question("Digite a categoria do funcionario: ")
let salario = rl.questionFloat("Digite seu salário atual: ")

switch (categoria) {
    case "A":
        console.log(`O novo salário do funcionario = ${salario*1.05}`)
        break
    case "B": 
        console.log(`O novo salário do funcionario = ${salario*1.10}`)
        break
    case "C": 
        console.log(`O novo salário do funcionario = ${salario*1.15}`)
        break
    case "D": 
        console.log(`O novo salário do funcionario = ${salario*1.20}`)
        break
    default:
        console.log('Teste')
        break;
}
*/

//1
let multiplicador = rl.questionInt("Informe o numero desejado: ")

let cont = 0
while (cont<=10) {
    let resultado = multiplicador * cont;
    console.log(`${multiplicador} x ${cont} = ${resultado}`);
    cont++;
}

//2
let numAlunos = rl.questionInt("Informe o número de alunos da turma: ")

// Variáveis para armazenar a soma das médias de todos os alunos e o contador de aluno atual
let somaMedias = 0;
let contadorAlunos = 1;

// Loop enquanto ainda houver alunos a serem processados
while (contadorAlunos <= numAlunos) {
    console.log(`Aluno ${contadorAlunos}:`);

    // Variável para armazenar a soma das notas do aluno
    let somaNotas = 0;
    let contadorBimestres = 1;

    // Loop para ler as notas dos 4 bimestres de cada aluno
    while (contadorBimestres <= 4) {
        let nota = rl.questionInt(`Digite a nota do ${contadorBimestres}º bimestre para o aluno ${contadorAlunos}: `);
        somaNotas += nota;
        contadorBimestres++;
    }

    // Calcular a média do aluno
    let mediaAluno = somaNotas / 4;

    // Adicionar a média do aluno à soma das médias
    somaMedias += mediaAluno;

    // Imprimir a média do aluno
    console.log(`Média do aluno ${contadorAlunos}: ${mediaAluno.toFixed(2)}`);

    // Avançar para o próximo aluno
    contadorAlunos++;
}

// Calcular a média geral da turma
let mediaGeralTurma = somaMedias / numAlunos;

// Imprimir a média geral da turma
console.log(`Média geral da turma: ${mediaGeralTurma.toFixed(2)}`);

//3
import rl, { questionInt } from 'readline-sync';

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Inicializar a variável de tentativa do usuário
let tentativa;

// Iniciar o loop do-while
do {
    // Solicitar ao usuário que faça uma tentativa
    tentativa = rl.questionInt("Tente adivinhar o número (entre 1 e 100):");

    // Verificar se a tentativa está correta, maior ou menor que o número aleatório
    if (tentativa === numeroAleatorio) {
        console.log("Parabéns! Você adivinhou o número correto.");
    } else if (tentativa < numeroAleatorio) {
        console.log("Tente um número maior.");
    } else {
        console.log("Tente um número menor.");
    }

    // Continuar o loop enquanto a tentativa estiver incorreta
} while (tentativa !== numeroAleatorio);



