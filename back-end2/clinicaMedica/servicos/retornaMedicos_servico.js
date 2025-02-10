import pool from './conexao.js';

export async function executarQuery(conexao, query) {
    let resposta_medicos = await conexao.query(query);
    let resposta = resposta_medicos[0]
    return resposta
}

export async function medicos() {
    const conexao = await pool.getConnection()
    const query = "SELECT medicos.id, medicos.nome, medicos.telefone, medicos.email, especialidades.especialidade FROM medicos INNER JOIN especialidades ON especialidades.id = medicos.especialidade;"
    let resposta_medicos = await conexao.query(query);
    let resposta = resposta_medicos[0]
    conexao.release()
    return resposta
}

export async function medicosEspecialidade(especialidade) {
    const conexao = await pool.getConnection()
    const query = `SELECT medicos.id, medicos.nome, medicos.telefone, medicos.email, especialidades.especialidade FROM medicos INNER JOIN especialidades ON especialidades.id = medicos.especialidade WHERE especialidades.especialidade = "${especialidade}"`
    let resposta = executarQuery(conexao, query)
    conexao.release()
    return resposta
}

export async function medicosNome(nome) {
    const conexao = await pool.getConnection()
    const query = "SELECT medicos.id, medicos.nome, medicos.telefone, medicos.email, especialidades.especialidade FROM medicos INNER JOIN especialidades ON especialidades.id = medicos.especialidade WHERE medicos.nome LIKE '%" + nome + "%'"
    let resposta = executarQuery(conexao, query)
    conexao.release()
    return resposta
}