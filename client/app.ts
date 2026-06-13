const URL_API = 'http://localhost:3000/items';

const form = document.getElementById('formCadastro') as HTMLFormElement;
const inputTitulo = document.getElementById('txtTitulo') as HTMLInputElement;
const inputDescricao = document.getElementById('txtDescricao') as HTMLTextAreaElement;
const listaContainer = document.getElementById('listaContainer') as HTMLDivElement;

// carregar lista
async function carregarElementos(): Promise<void> {
    const resposta = await fetch(URL_API);
    const dados = await resposta.json();

    listaContainer.innerHTML = "";

    dados.forEach((item: any) => {
        const div = document.createElement('div');

div.innerHTML = `
    <h3>${item.titulo}</h3>
    <p>${item.descricao}</p>
    <button onclick="excluirItem('${item.id}')">Excluir</button>
`;

        listaContainer.appendChild(div);
    });
}

    async function excluirItem(id: string): Promise<void> {
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