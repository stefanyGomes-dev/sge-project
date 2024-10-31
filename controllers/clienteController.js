const Cliente = require('../models/cliente');

exports.criarCliente = async (req, res) => {
    const { cliente_nome, cliente_email } = req.body;

    try {
        const cliente = await Cliente.create({ cliente_nome, cliente_email });
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar cliente' });
    }
};

exports.listarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar clientes' });
    }
};

exports.alterarCliente = async (req, res) => {
    const { cliente_id } = req.params;
    const { cliente_nome, cliente_email } = req.body;

    try {
        const [updated] = await Cliente.update({ cliente_nome, cliente_email }, {
            where: { cliente_id }
        });

        if (updated) {
            const clienteAtualizado = await Cliente.findByPk(cliente_id);
            res.status(200).json(clienteAtualizado);
        } else {
            res.status(404).json({ error: 'Cliente não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao alterar cliente' });
    }
};

exports.excluirCliente = async (req, res) => {
    const { cliente_id } = req.params;

    try {
        const excluir = await Cliente.destroy({ where: { cliente_id } });

        if (excluir) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Cliente não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir o cliente' });
    }
};
