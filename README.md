# Gerenciador de Tarefas — Sistema Web Full Stack  

Avaliação Processual — Programação para Internet  
Faculdade Multivix | Curso: Sistemas de Informação | Turma: Noturna  
Professor: Edgard da Cunha Pontes  


Integrante:
Jordana Wantil Tomazeli

---

## Descrição do Sistema

O Gerenciador de Tarefas é uma aplicação web Full Stack que permite o cadastro, visualização e remoção de tarefas de forma dinâmica.

O sistema utiliza comunicação entre frontend e backend por meio de requisições HTTP, implementando um modelo cliente-servidor simples.

Cada tarefa possui:

- título
- descrição

---

## Estrutura do Projeto
```
meu-projeto-ppi/
├── client/
│   ├── index.html
│   ├── styles.css
│   ├── app.ts
│   └── app.js
│
└── server/
├── server.ts
├── package.json
└── tsconfig.json
```

- client: responsável pela interface do usuário  
- server: responsável pela lógica e API  
  
---

## Como Executar

#### Backend (Servidor)

Certifique-se de ter o Node.js instalado.

No terminal, execute:
```bash
cd server
npm install
npm run dev
```

O servidor será iniciado em:
```http://localhost:3000```


#### Frontend (Cliente)

Abra o arquivo abaixo em um navegador:
```client/index.html```   

---
## Estrutura e Documentação do Código

### 1.    Estrutura Geral

O projeto está dividido em duas partes principais:

- client → responsável pela interface
- server → responsável pela lógica e API

  <br>

### 2.     Backend (Node.js + Express + TypeScript)

#### 2.1 Importações
```
import express, { Request, Response } from 'express';
import cors from 'cors';
```
O Express é utilizado para criação do servidor HTTP, enquanto o cors permite a comunicação entre frontend e backend.  

#### 2.2 Interface de Dados
```
interface IItemSistema {
    id: string;
    titulo: string;
    descricao: string;
    dataCriacao: string;
}
```
A interface define a estrutura de uma tarefa no sistema.
Os tipos (string) funcionam como tipagem estática, semelhante ao C#, garantindo maior segurança no desenvolvimento.  

#### 2.3 Armazenamento em Memória
```
const bancoDadosMemoria: IItemSistema[] = [];
```
O sistema utiliza um array para simular um banco de dados.
Características:

- armazenamento temporário
- dados são perdidos ao reiniciar o servidor  


#### 2.4 Rotas da API
- GET /items
```
app.get('/items', (req: Request, res: Response) => {
    res.status(200).json(bancoDadosMemoria);
});
```
Retorna todas as tarefas cadastradas.

- POST /items
```
app.post('/items', (req: Request, res: Response) => {
    const { titulo, descricao } = req.body;
```
Adiciona uma nova tarefa ao sistema.
Validação:  
título e descrição são obrigatórios

- DELETE /items/:id
```
app.delete('/items/:id', (req: Request, res: Response) => {
```  
Remove uma tarefa com base no ID.  

#### 2.5 Status HTTP  

200 → Requisição bem-sucedida  
201 → Recurso criado  
400 → Erro na requisição  
404 → Item não encontrado  



### 3.    Frontend (HTML + CSS + TypeScript)  

#### 3.1 Estrutura HTML  
O arquivo index.html contém:  

- Formulário de cadastro
- Campos de título e descrição
- Área de listagem das tarefas


#### 3.2 Estilização (CSS)  
O CSS é responsável por:  

- Layout do formulário  
- Organização dos elementos  
- Estilos visuais da interface  


#### 3.3 Lógica em TypeScript (app.ts)  
##### Busca de tarefas:  
```
fetch(URL_API)
```

##### Cadastro de tarefas:
```
method: 'POST'
```

##### Exclusão de tarefas:
```
method: 'DELETE'
```

---

## Integração Frontend + Backend

#### Fluxo do sistema:

1. usuário preenche formulário
2. frontend envia requisição POST
3. backend armazena no array
4. frontend faz requisição GET
5. lista é atualizada
6. usuário pode excluir (DELETE)  

#### Conceitos Aplicados
O projeto demonstra:
1. comunicação HTTP (GET, POST, DELETE)
2. uso de TypeScript
3. arquitetura cliente-servidor
4. manipulação de DOM
5. consumo de API com Fetch
6. armazenamento em memória



#### Fluxo Geral do Sistema
```
Início
└── carregamento da página
├── busca tarefas (GET)
├── exibe lista
├── usuário cadastra tarefa (POST)
├── sistema atualiza lista
└── usuário pode excluir tarefa (DELETE)
```

#### Limitações do Sistema

- não possui banco de dados
- dados não são persistentes
- não possui autenticação
