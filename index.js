//import pool from "./servico/conexao.js"
import express from 'express';
import { retornaCampeonatos } from './servico/retornaCampeonatos_servico.js';
import { retornaCampeonatosID } from './servico/retornaCampeonatos_servico.js';
import { retornaCampeonatosAno } from './servico/retornaCampeonatos_servico.js';
import { retornaCampeonatosTime } from './servico/retornaCampeonatos_servico.js';

const app = express();

app.get('/campeonatos', async (req,res) => {
    let campeonatos;

    const ano = req.query.ano;

    if (typeof ano === 'undefiled') {
        campeonatos = await retornaCampeonatos()
    } else {
        campeonatos = await retornaCampeonatosAno(parseInt(ano))
    }

    if(campeonatos.length > 0) {
        res.json(campeonatos);
    } else {
        res.status(404).json({mensagem: "Nenhum campeonato encontrado"})
    }

});

app.get('/campeonatos/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const campeonato = await retornaCampeonatosID(id);
    if (campeonato.length > 0) {
        res.json(campeonato);
    } else {
        res.status(404).json({mensagem: "Nenhum campeonato encontrado"})
    }
});

app.listen(9000, async () => {
    const data = new Date();
    console.log("Servidor não inicializado em: " +data);
}) 