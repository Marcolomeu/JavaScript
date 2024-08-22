function nome(string) {
    return string.toUpperCase();
}
let string = 'abc';
nome(string);

/*2*/
function verificadora(number) {
    if (number % 2) {
        return 'par';
    } else {
        return 'ímpar';
    }
}

let number = 8;
verificadora(number);
/*3*/

let num1 = 10,
    num2 = 15;

function somar(num1,num2) {
    return num1 + num2
}
somar(num1,num2)

/*4*/
let valor = 10;
let porcento = 0.020;
function porcentagem(valor,porcento) {
    return valor * porcento;
}
porcentagem(valor,porcento)

/*5*/
let valorOriginal = 200;
let desconto = 0.020;


function calculoProduto(valorOriginal,desconto) {
    console.log(valorOriginal * desconto)
}