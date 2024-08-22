//Alunos: Marcos Vinícius S. L. Cassimiro e Ana Caroline C. Pereira
import rl from "readline-sync";

const formas = [
    {tipo: '1- Retângulo'},
    {tipo: '2- Triângulo'},
    {tipo: '3- Círculo'},
    {tipo: '4- Sair'},
]
let cont = 0

do {
    for (const menu of formas) {
        console.log(menu.tipo)
    };
    if (cont >= 1) {
        let continuar = rl.questionInt(`Deseja continuar? \n(1)Sim \n(2)Não`)
    }
    cont ++
    
    let pergunta = rl.questionInt(`Escolha um número para realizar o cálculo: `)
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
                break
            default:
                console.log(`Número não encontado`)
        };

} while (continuar === 1);
   

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