//Sintaxe basica
//for (const iterator of object) {
//}

//Exemplo  de como utilizar o for...of para percorrer um array.
let emails_alunos = [
    "danilo@email.com",
    "jessica@email.com",
    "luana@email.com",
    "gustavo@email.com",
  ];
  
  for (let email of emails_alunos) {
    console.log("Email: " + email);
  }
  
  //Exemplo percorrendo uma coleção de clientes.
  let clientes_array = [
    { id: 1, nome: "Mônica", telefone: "99999-6565" },
    { id: 2, nome: "Tânia", telefone: "99999-0778" },
    { id: 3, nome: "Carlos", telefone: "99999-0551" },
  ];
  //Detalhado
  for (let cliente of clientes_array) {
    let nome = cliente.nome;
    let telefone = cliente.telefone;
  
    console.log("Nome: " + nome + " - Telefone: " + telefone);
  }
  //Simplificado
  for (let cliente of clientes_array) {
    console.log(`Nome: ${cliente.nome} - Telefone: ${cliente.telefone}`);
  }
  
  //Exemplo onde aplicamos o desconto nos preços dos produtos com o auxílio da estrutura de repetição for .. of.
  let produtos_array = [
    { id: 1, nome: "mouse", preco: 50 },
    { id: 2, nome: "teclado", preco: 90 },
    { id: 3, nome: "monitor", preco: 350 },
    { id: 4, nome: "nobreak", preco: 600 },
  ];
  
  let percentual_desconto = 10;
  
  for (let produto of produtos_array) {
    let nome = produto.nome;
    let preco = produto.preco;
  
    let valor_desconto = (preco * percentual_desconto) / 100;
    let novo_preco = preco - valor_desconto;
  
    console.log(
      `Novo valor do produto ${nome}: \t${novo_preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}.`
    );
  }
  
  //Exemplo utilizando a estrutura for .. of para percorrer uma coleção de notas.
  let notas_trimestrais = [9, 7, 6, 7];
  
  let total_notas = notas_trimestrais.length;
  let soma_notas = 0;
  
  for (let nota of notas_trimestrais) {
    soma_notas = soma_notas + nota;
  }
  
  let media = soma_notas / total_notas;
  
  console.log("Média: " + media);
  
  if (media >= 7) {
    console.log("Aprovado");
  } else if (media >= 6 && media < 7) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }

