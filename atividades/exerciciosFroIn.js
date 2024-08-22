//Sintaxe for in
/*
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
*/

//Exemplo de utilização do for...in 
const pessoa = {
    nome: "Davi",
    idade: 25,
    profissao: "Desenvolvedor",
  };
  
  for (let dados in pessoa) {
    console.log(`${dados}: ${pessoa[dados]}`);
  }
  /*
  //Mais um exemplo
  let aluno = {
    nome: "Marcos",
    email: "marcos@email.com",
    idade: 25,
  };
  
  for (let dados in aluno) {
    console.log(aluno[dados]);
  }
  
  //Outro exemplo, agora com carros
  let carro = { nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020 };
  
  let percentual_desconto = 5;
  
  for ( let propriedade in carro ) {
  
      if ( propriedade == "preco" ) {
          let preco = propriedade;
          let desconto = ( carro[preco] * percentual_desconto ) / 100;
          let novo_preco = carro[preco] - desconto;
          console.log("novo preço: R$" + novo_preco + ",00");
      } else {
          console.log(propriedade + ": " + carro[propriedade]);
      }
  }
  */