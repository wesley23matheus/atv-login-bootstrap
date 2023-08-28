

function salvarLocalStorage(chave, dados) {
    localStorage.setItem(chave, JSON.stringify(dados));
}

// Função para acessar dados do armazenamento local (localStorage)
function acessarLocalStorage(chave) {
    const dados = localStorage.getItem(chave);

    if (dados) {
        return JSON.parse(dados);
    }

    return false;
}

const formCadastro = document.getElementById('cadastroUsuarioForm');

formCadastro.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('As senhas não coincidem');
        return;
    }

    const userData = {
        nome: name,
        email: email,
        senha: password,
        confirmacaoSenha: confirmPassword
    };

    // Adicione o usuário ao armazenamento local (localStorage)
    const usuariosCadastrados = acessarLocalStorage("usuarios-cadastrados") || [];
    usuariosCadastrados.push(userData);
    salvarLocalStorage("usuarios-cadastrados", usuariosCadastrados);

    alert('Usuário cadastrado com sucesso! Redirecionando para a tela de login.');
    window.location.href = './login.html'; // Substitua com o caminho real da página de login
});