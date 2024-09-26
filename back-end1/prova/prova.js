//Alunos: Marcos Vinícius S. L. Cassimiro e Ana Caroline C. Pereira
import rl from "readline-sync";

const formas = [
    {tipo: '1- Retângulo'},
    {tipo: '2- Triângulo'},
    {tipo: '3- Círculo'},
    {tipo: '4- Sair'},
]

let sair = true
let sair2 = true


while (sair && sair2) {
    for (const menu of formas) {
        console.log(menu.tipo)
    };
    let pergunta = rl.questionInt(`Escolha um número para realizar o cálculo: `)
    if (pergunta>0 ) {
        switch (pergunta) {
            case 1:
                let baseRetangulo = rl.questionFloat('Digite o valor da base do retangulo: ')
                let alturaRetangulo = rl.questionFloat('Digite o valor da altura do retangulo: ')
                console.log(retangulo(baseRetangulo,alturaRetangulo))
                break;
        
            case 2:
                let baseTriangulo = rl.questionFloat('Digite o valor da base do triangulo: ')
                let alturaTriangulo = rl.questionFloat('Digite o valor da altura do triangulo: ')
                console.log(triangulo(baseTriangulo,alturaTriangulo))
                break;
            case 3:
                let raioCirculo = rl.questionFloat(`Digite o valor do raio do circulo: `)
                console.log(circulo(raioCirculo))
                break
            case 4:
                console.log(`Saindo......`)
                sair = false
                break
            default:
                console.log(`Número não encontado`)
        };
      
    } 
    else{
        console.log('Número invalido. Digite novamente!')
        continue
        
    }
    
    let continuar = rl.questionInt(`Deseja continuar? \n(1) Sim \n(Qualquer outro número) Não\n`)
    switch (continuar) {
        case 1:
            continue
        default:
            console.log(`Saindo...`)
            sair2 = false
    }
}



//Retângulo
function retangulo(baseRetangulo, alturaRetangulo) {
    return (baseRetangulo*alturaRetangulo).toFixed(2)
}

//Triângulo
function triangulo(baseTriangulo, alturaTriangulo) {
    return (baseTriangulo*alturaTriangulo/2).toFixed(2)
}

//Círculo
function circulo(raioCirculo) {
    return (3.1415 * raioCirculo ** 2).toFixed(2)
}


