import rl, { questionInt } from 'readline-sync';

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let number = 0;
let audio = new Audio('audios/fogosArtificio.mp3'); 

do {
    number = rl.questionInt(`Escolha um número entre 1 e 100:`);
    if (number < numeroAleatorio) {
        console.log(`Digite um número maior que ${number}`);
    } else if (number > numeroAleatorio){
        console.log(`Digite um número menor que ${number}`);       
    }
} while (number !== numeroAleatorio);

console.log(`PARABENS !!!!! ----- VOCÊ VENCEU!`);
audio.play();
