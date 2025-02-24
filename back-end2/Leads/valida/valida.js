function validaNome(nome) {
    const regexNome = /^[a-zA-ZÀ-ÿ\s\-']+$/;
    const isvallid = nome.length >= 2 && regexNome.test(nome)
    return isvallid;
}

function validaEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isvallid = regexEmail.test(email);
    return isvallid
}



export function validaUsuario(nome, email){
    const nomeValido = validaNome(nome);
    const emailValido = validaEmail(email)

    const usuarioValido = nomeValido && emailValido;

    if (usuarioValido) {
        return {status: true, mensagem: ''}
    } else {
        return {status: false, mensagem: 'Nome e/ou email inválido(s)'}
    }
}