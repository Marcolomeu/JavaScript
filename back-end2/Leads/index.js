import express from 'express';
import pool from './servico/conexao.js';
import { listarTudo, cadastrarUsuarios } from './servico/servico.js';

const app = express();
app.use(express.json());


app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await listarTudo();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar usuários' });
    }
});

app.post('/usuarios', async (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;
    await cadastrarUsuarios(nome, email, telefone);
    res.status(201).send({"Mensagem": "Cadastro efetivado com sucesso!"});
})

app.listen(3000, async () => {
    const data = new Date()
    console.log("Servidor iniciado na porta 3000", data);
    const conexao = await pool.getConnection();
    console.log(conexao.threadId);
    conexao.release();
})