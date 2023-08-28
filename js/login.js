
// Função para salvar dados no armazenamento local (localStorage)
function salvarLocalStorage(chave, dados) {
    localStorage.setItem(chave, JSON.stringify(dados));
}

//Função para acessar dados do armazenamento local (localStorage)
function acessarLocalStorage(chave) {
    const dados = localStorage.getItem(chave);

    if (dados) {
        return JSON.parse(dados);
    }

    return false;
}

document.addEventListener('DOMContentLoaded', function () {
    const formLogin = document.getElementById('pagLogin');

    formLogin.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Verifique se o usuário existe na página de cadastro
        const usuariosCadastrados = acessarLocalStorage("usuarios-cadastrados");

        const usuarioEncontrado = usuariosCadastrados.find((user) => user.email === email && user.senha === password);

        if (usuarioEncontrado) {
            // Login bem-sucedido, redirecione o usuário para a página de recados
            window.location.href = './recados.html'; // Substitua com o caminho real da página de recados
        } else {
            // Trate o caso em que o login não é válido (exiba uma mensagem de erro, por exemplo)
            alert('Login inválido');
            window.location.href = './cadastro.html'; // Redirecione para a página de cadastro
        }
    });
});

