/*1*/
let apartamento = {
    quartos: 3,
    tipo: "apartamento",
    endereco: "Avenida Principal, 456 - Centro",
    andar: 7,
};

console.log(`${apartamento.tipo} com ${apartamento.quartos} quartos, localizado no ${apartamento.andar}° andar, da ${apartamento.endereco}`);

/*1.2*/
let produtoEmbalado = {
    nome: "Laptop HP",
    categoria: "Eletrônicos",
    peso: 1.5,
    preco: 3500.00
}
console.log(`O produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria}, pesando ${produtoEmbalado.peso} kg, está à venda por R$ ${produtoEmbalado.preco}`)









/*2*/
class Imovel{
    constructor(quartos, tipo, endereco) {
    this.quartos = quartos;
    this.tipo = tipo;
    this.endereco = endereco;      
    }
    exibirInformacoes() {
        return `Quartos: ${this.quartos} \nTipo: ${this.tipo} \nEndereco: ${this.endereco}`
    }
}

const Casa = new Imovel(4, "Casa", "Rua da Amizade, 789 - Bairro Alegre");
const Apartamento = new Imovel(2, "Apartamento", "Avenida da Paz, 123 - Centro");

console.log(Casa.exibirInformacoes());
console.log(Apartamento.exibirInformacoes())

/*2.2*/
class Veiculo{
    constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;      
    }
    exibirInformacoes() {
        return `Marca: ${this.marca} \n Modelo: ${this.modelo} \nAno: ${this.ano}`
    }
}

const Carro = new Imovel("Toyota", "Corolla", 2022);
const Motocicleta = new Imovel("Honda", "CRB 600RR", 2021);

console.log(Carro.exibirInformacoes());
console.log(Motocicleta.exibirInformacoes())