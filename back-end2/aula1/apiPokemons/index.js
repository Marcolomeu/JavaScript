const express = require('express');
const colecaoPokemons = require('./dados/dados.js');

const app = express();

app.get('/pokemons', (req, res) => {
    res.json(colecaoPokemons.colecaoPokemonsFogo)
})

app.get('/pokemons:idnome', (req,res) =>{
    const idPokemon = parseInt(req.params.idPoke);
    let mensagemErro = '';
    let nome;

    if (!(isNaN(idPokemon))) {
        nome = colecaoPokemonsFogo.colecaoPokemonsFogo.find(u => u.id === idPoke);
        if (!nome) {
            mensagemErro = 'Pokemon não encontrado';
        }
    } else{
        mensagemErro = 'Requisição inválida';
    }

    if (nome) {
        res.json(nome);
    } else {
        res.status(404).json({'erro': mensagemErro});
    }
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 8080 em:' +data);
});
