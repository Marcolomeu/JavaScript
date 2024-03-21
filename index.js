import entradaDados from 'readline-sync';

let nome = entradaDados.question('Digite seu nome: ')
console.log(`Olá, ${nome}.`)

let email = entradaDados.questionEMail('Digite seu email: ')
let senha = entradaDados.questionNewPassword('Digite sua senha: ')




let x = entradaDados.questionInt('X: ')
let y = entradaDados.questionInt('Y: ')
console.log(`A soma dos números é = ${x+y}`)

let idade = 18;
if(idade >= 18) {console.log("Maior de idade")
}
else{
    console.log('Menor de idade');
}

if (idade >= 18) console.log("Maior de idade");//if
(idade >= 18) && console.log("Maior de idade");//if

let mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade"; //

