# Gerenciador de Tarefas - PPI

## Integrante
Jordana Wantil Tomazeli

## Disciplina
Programação para Internet

---

## 1. Objetivo

Desenvolver uma aplicação web Full Stack com integração entre frontend e backend, utilizando Node.js, Express e TypeScript.

---

## 2. Descrição do Projeto

O sistema consiste em um gerenciador de tarefas que permite:

- Cadastrar tarefas
- Visualizar tarefas em tempo real
- Excluir tarefas da lista

A aplicação utiliza comunicação entre cliente e servidor por meio de requisições HTTP.

meu-projeto-ppi/
├── client/
│   ├── index.html
│   ├── styles.css
│   └── app.ts
└── server/
├── server.ts
├── package.json
└── tsconfig.json

---

## 3. Estrutura do Projeto
- client: responsável pela interface do usuário  
- server: responsável pela lógica e rotas da aplicação  

---

## 4. Tecnologias Utilizadas

### Backend
- Node.js
- Express
- TypeScript

### Frontend
- HTML5
- CSS3
- TypeScript
- Fetch API

---

## 5. Funcionamento da Aplicação

1. O usuário preenche o formulário
2. O frontend envia os dados ao backend (POST)
3. O backend armazena os dados em memória
4. O frontend busca os dados atualizados (GET)
5. A lista é atualizada automaticamente
6. O usuário pode excluir tarefas (DELETE)

---

## 6. Estrutura do Backend

### 6.1 Interface de Dados

A estrutura de uma tarefa é definida pela interface:

```ts
interface IItemSistema {
    id: string;
    titulo: string;
    descricao: string;
    dataCriacao: string;}
```

### 6.2 Armazenamento
Os dados são armazenados em memória: 
```const bancoDadosMemoria: IItemSistema[] = [];```

Observação: os dados são perdidos ao reiniciar o servidor.

---

## 7. Rotas da API
# GET /items
Retorna todas as tarefas cadastradas.
# POST /items
Cria uma nova tarefa com título e descrição.
# DELETE /items/:id
Remove uma tarefa a partir do seu identificador.

---

## 8. Estrutura do Frontend
### HTML
- Estrutura da página
- Formulário de entrada
- Área de listagem

### CSS
- Estilização da interface
- Organização visual

### TypeScript (app.ts)
Responsável por:
- Enviar dados ao backend
- Buscar tarefas
- Excluir tarefas
- Atualizar a interface dinamicamente

---

## 9. Métodos HTTP Utilizados

GET → Listar tarefas
POST → Cadastrar tarefas
DELETE → Excluir tarefas

---

## 10. Como Executar o Projeto
Backend
```
cd server
npm install
npm run dev
```

Servidor disponível em:
```http://localhost:3000```

Frontend
Abrir o arquivo:
```client/index.html```


