import pool from "./conexao.js";

export async function listarTudo() {
    const conexao = await pool.getConnection();
    const query = 'SELECT * FROM captura';
    let resposta_usuarios = await conexao.query(query); 
    let resposta = resposta_usuarios[0];
    conexao.release();
    return resposta;
}

export async function cadastrarUsuarios(nome, email, telefone) {
    const conexao = await pool.getConnection();
    const resposta = await conexao.query(
        `INSERT INTO captura (nome, email, telefone) VALUES (?, ?, ?)`, [nome, email, telefone]
    );
    console.log(resposta);
    conexao.release();
    return resposta;
}