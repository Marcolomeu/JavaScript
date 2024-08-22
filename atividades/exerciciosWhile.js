import rl, { questionInt } from 'readline-sync';

// 01-Escreva um programa que peça ao usuário para digitar um número e, em seguida, imprima a tabuada desse número usando um loop while.
/*
let num = rl.questionInt("Informe o número da tabuada: ");
let cont = 0;
while (cont <= 10) {
    let resultado = num * cont;
    console.log(`${num} x ${cont} = ${resultado}`);
    cont++;
}
*/

// 02-Escreva um programa que tem por finalidade calcular a Média Geral de uma Turma de alunos.
// O Programa deverá:
// Ler o número de alunos da turma;
// Ler as notas dos 4 bimestres de cada aluno;
// Calcular e imprimir a média do aluno;
// Calcular e imprimir a média da turma.

// Ler número de alunos da turma
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