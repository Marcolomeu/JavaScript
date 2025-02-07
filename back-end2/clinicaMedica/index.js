import {medicos, medicosEspecialidade, medicosNome } from "./servicos/retornaMedicos_servico.js";
import express from 'express';

const app = express();

app.get('/medicos', async (req, res) => {
    const especialidade = req.query.especialidade;
    const nome = req.query.nome;
    let resposta;
    if (typeof especialidade === 'undefined' && typeof nome === 'undefined') {
        resposta = await medicos()
    } else if (typeof especialidade !== 'undefined') {
        resposta = await medicosEspecialidade((especialidade))
    } else if (typeof nome !== 'undefined') {
        resposta = await medicosNome(nome)
    }
    if (resposta.length > 0) {
        res.json(resposta)
    } else {
        res.status(404).json({ mensagem: "Nenhum médico encontrado" })
    }
})







app.listen(9000, async () => {
    const data = new Date()
    console.log("Servidor iniciado na porta 9000", data);
    const conexao = await pool.getConnection();
    console.log(conexao.threadId);
    conexao.release();

})