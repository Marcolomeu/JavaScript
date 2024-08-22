//Sintaxe da instrução do while
//do {
    //declaração
//} while (condition);

//Exemplo de utilização:
let contador = 0;
do {
    console.log(contador);
    contador++;
} while (contador < 5); //enquanto o valor for menor que 5, a repetição continua

//Percorrendo um Array
let cont = 0;

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

do {
    console.log(meses[cont]);
    cont++;
} while (cont < meses.length);

//Exemplo calculo de juros
let valor_mensalidade = 100;
let taxa_multa = 0.02; // 2%
let total_dias = 10;
let ctd = 1;

do {
    let dias_atraso = ctd;
    let valor_multa = valor_mensalidade * taxa_multa * dias_atraso;
    let novo_valor_mensalidade = valor_mensalidade + valor_multa;
    console.log("Dia(s) de atraso: " + dias_atraso + " - mensalidade atualizada: R$" + novo_valor_mensalidade + ",00");
    ctd++;
} while (ctd < total_dias);