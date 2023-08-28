
  const rowRecados = document.getElementById("row-recados");

function salvarLocalStorage(chave, dados) {
  localStorage.setItem(chave, JSON.stringify(dados));
}

function acessarLocalStorage(chave) {
  const dados = localStorage.getItem(chave);

  if (dados) {
    return JSON.parse(dados);
  }

  return false;
}

function checkUsuarioLogado() {
  const usuario = acessarLocalStorage("usuarios-cadastrados");

  if (!usuario) {
    window.location.href = "./login.html";
  }
}

async function buscarRecados() {
  try {
    const { data } = await axios.get("http://localhost:5555/recados");

    renderizarRecados(data);
  } catch (error) {
    console.log(error);
  }
}

function renderizarRecados(recados) {
  console.log(recados);
  recados.forEach((item) => {
    rowRecados.innerHTML += `
        <div class="col-12 col-md-3">
            <div class="card mb-4">
            <div class="card-body">
                <h5 class="card-title">${item.titulo}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">ID: ${item.id}</h6>
                <p class="card-text">${item.descricao}</p>

                <div class="d-flex justify-content-end">
                <button class="btn btn-primary" data-id="${item.id}" onclick="excluirRecado(this)">Excluir</button>
                </div>
            </div>
            </div>
        </div>
    `;
  });
}

async function excluirRecado(element) {
  const id = element.getAttribute("data-id");

  try {
    const response = await axios.delete(`http://localhost:5555/recados/${id}`);
    element.parentElement.parentElement.parentElement.parentElement.remove();
  } catch (error) {
    console.log(error);
  }
}

checkUsuarioLogado();
buscarRecados();





