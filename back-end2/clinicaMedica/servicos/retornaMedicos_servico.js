import pool from './conexao.js';

export async function executarQuery(conexao, query) {
    let resposta_medicos = await conexao.query(query);
    let resposta = resposta_medicos[0]
    return resposta
}

export async function medicos() {
    const conexao = await pool.getConnection()
    const query = "SELECT * FROM medicos"
    let resposta_medicos = await conexao.query(query);
    let resposta = resposta_medicos[0]
    conexao.release()
    return resposta
}

export async function medicosEspecialidade(especialidade) {
    const conexao = await pool.getConnection()
    const query = `SELECT id, nome, telefone, email, especialidade FROM medicos WHERE especialidade = ${especialidade}`
    let resposta = executarQuery(conexao, query)
    conexao.release()
    return resposta
}

export async function medicosNome(nome) {
    const conexao = await pool.getConnection()
    const query = "SELECT id, nome, telefone, email, especialidade FROM medicos WHERE nome '%" + nome + "%'"
    let resposta = executarQuery(conexao, query)
    conexao.release()
    return resposta
}