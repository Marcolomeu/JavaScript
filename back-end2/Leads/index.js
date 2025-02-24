import express from 'express';
import cors from 'cors'; 
import pool from './servico/conexao.js';
import { listarTudo, cadastrarUsuarios } from './servico/servico.js';
import { validaUsuario } from './valida/valida.js';

const app = express();
app.use(cors()); 
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

    const usuarioValido = validaUsuario(nome, email)
    if (usuarioValido.status) {
        await cadastrarUsuarios(nome, email, telefone);
        res.status(204).send({"Mensagem": "Cadastro efetivado com sucesso!"});
    } else{
        res.status(400).send( {"Mensagem": usuarioValido.mensagem});
    }
});

app.listen(3000, async () => {
    const data = new Date();
    console.log("Servidor iniciado na porta 3000", data);
    console.log("Olha o aviãozinho: http://localhost:3000/usuarios")
    const conexao = await pool.getConnection();
    console.log(conexao.threadId);
    conexao.release();
});