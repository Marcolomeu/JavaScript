import rl from 'readline-sync';


let ddd = rl.questionInt("Informe o DDD: ")

switch (ddd) {
    case 69:
        console.log("Rondônia")
        break;
    case 21:
        console.log("Rio de Janeiro")
        break
    case 11:
        console.log("São Paulo")
        break
    case 65:
        console.log("Mato Grosso")
        break
    default:
        console.log("DDD não encontrado")
        break;
}