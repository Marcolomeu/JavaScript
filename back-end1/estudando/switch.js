import rl from 'readline-sync';

let ddd = rl.questionInt("Informe o DDD: ");

switch (ddd) {
    case 69:
        console.log("Rondônia");
        break;
    case 21:
        console.log("Rio de Janeiro");
        break;
    case 11:
        console.log("São Paulo");
        break;
    case 65:
        console.log("Mato Grosso");
        break;
    default:
        console.log("DDD não encontrado");
        break;
}


/*
No exemplo a seguir, se tipofruta for avaliada como "Banana", 
o programa faz a correspondência do valor com case "Banana" e executa a declaração associada. 
Quando o break é encontrado, o programa termina o switch e executa a declaração seguinte ao condicional. 
Se o break fosse omitido, a declaração de case "Cereja" também seria executada.
*/
let tipofruta = "Manga";
switch (tipofruta) {
    case "Laranja":
        console.log("O quilo da laranja está R$0,59.<br>");
        break;
    case "Maçã":
        console.log("O quilo da maçã está R$0,32.<br>");
        break;
    case "Banana":
        console.log("O quilo da banana está R$0,48.<br>");
        break;
    case "Cereja":
        console.log("O quilo da cereja está R$3,00.<br>");
        break;
    case "Manga":
        console.log("O quilo da manga está R$0,56.<br>");
        break;
    case "Mamão":
        console.log("O quilo do mamão está R$2,23.<br>");
        break;
    default:
        console.log("Desculpe, não temos " + tipofruta + ".<br>");
}
console.log("Gostaria de mais alguma coisa?<br>");


var mes = "Janeiro";

switch (mes) {
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão");
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono");
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("Inverno");
        break;
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("Primavera");
        break;
    default:
        console.log("Mês inválido");
        break;
}