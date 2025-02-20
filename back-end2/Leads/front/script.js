document.getElementById('cadastroForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    const response = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email, telefone })
    });

    if (response.ok) {
        console.log('Cadastro efetuado com sucesso!');
    } else {
        console.log('Erro ao cadastrar usuário.');
        const audioErro = new Audio('goku-e-um-fracassado.mp3');
        audioErro.play();
    }
});