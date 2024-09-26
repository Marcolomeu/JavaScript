const express = require('express');
const colecaoPokemons = require('./dados/dados.js');

const app = express();

app.get('/pokemons', (req, res) => {
    res.json(colecaoPokemons.colecaoPokemonsFogo)
})

app.get('/pokemons/:idpoke')