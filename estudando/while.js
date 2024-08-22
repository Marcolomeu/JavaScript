//Sintaxer básica
//while (condicao) {
    //declaração
//}

//Exemplo de uso do while
let contador = 0;

while (contador < 5) {
    console.log(contador);
    contador++;
}

//Tabuada com while
let numero = 3;
let cont = 0;

console.log("Tabuada de multiplicação - Nº " + numero);

while (cont <= 10) {
    let resultado = numero * cont;
    console.log(`${numero} x ${cont} = ${resultado}`);
    cont++;
}

//Calcular taxa de juros
let capital_emprestado = 3000;
let taxa_juros = 0.02; // 2%

let ctd = 1;
let parcelas_totais = 5;

while (ctd <= parcelas_totais) {
    let numero_parcela = ctd;
    let juros_emprestimo = capital_emprestado * taxa_juros * numero_parcela;
    console.log("A taxa de juros no período de " + numero_parcela + " mes(es) é de R$" + juros_emprestimo + ",00");
    ctd++;
}

//Exemplo de while com decremento
let ct = 10;

while (ct > 0) {
    console.log(contador);
    ct--;
}

//Percorrendo Array com while
let paises = ["Brasil", "Suíça", "França", "Japão"];

let ind = 0;

while (ind < paises.length) {
    console.log(paises[ind]);
    ind++;
}