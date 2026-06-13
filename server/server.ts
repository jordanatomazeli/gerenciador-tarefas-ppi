console.log("INICIANDO SERVIDOR...");
import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORTA = 3000;

// middlewares
app.use(cors());
app.use(express.json());

// interface
interface IItemSistema {
    id: string;
    titulo: string;
    descricao: string;
    dataCriacao: string;
}

// banco em memória
const bancoDadosMemoria: IItemSistema[] = [];

// rota GET
app.get('/items', (req: Request, res: Response) => {
    res.status(200).json(bancoDadosMemoria);
});

// rota POST
app.post('/items', (req: Request, res: Response) => {
    const { titulo, descricao } = req.body;

    if (!titulo || !descricao) {
        return res.status(400).json({ erro: "Campos obrigatórios" });
    }

    const novoItem: IItemSistema = {
        id: Date.now().toString(),
        titulo,
        descricao,
        dataCriacao: new Date().toISOString()
    };

    bancoDadosMemoria.push(novoItem);

    res.status(201).json(novoItem);
});

// DELETE (remover item)
app.delete('/items/:id', (req: Request, res: Response) => {
    const { id } = req.params;

    const index = bancoDadosMemoria.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).json({ erro: "Item não encontrado" });
    }

    bancoDadosMemoria.splice(index, 1);

    res.status(200).json({ mensagem: "Item removido com sucesso" });
});

// iniciar servidor
app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});