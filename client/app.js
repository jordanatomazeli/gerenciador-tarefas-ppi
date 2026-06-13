"use strict";
const URL_API = 'http://localhost:3000/items';
const form = document.getElementById('formCadastro');
const inputTitulo = document.getElementById('txtTitulo');
const inputDescricao = document.getElementById('txtDescricao');
const listaContainer = document.getElementById('listaContainer');
// carregar lista
async function carregarElementos() {
    const resposta = await fetch(URL_API);
    const dados = await resposta.json();
    listaContainer.innerHTML = "";
    dados.forEach((item) => {
        const div = document.createElement('div');
        div.innerHTML = `
    <h3>${item.titulo}</h3>
    <p>${item.descricao}</p>
    <button onclick="excluirItem('${item.id}')">Excluir</button>
`;
        listaContainer.appendChild(div);
    });
}
async function excluirItem(id) {
    await fetch(`${URL_API}/${id}`, {
        method: 'DELETE'
    });
    carregarElementos();
}
// enviar formulário
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await fetch(URL_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            titulo: inputTitulo.value,
            descricao: inputDescricao.value
        })
    });
    form.reset();
    carregarElementos();
});
// iniciar
carregarElementos();
