const Pedido = require('../models/pedido');

exports.criarPedido = async (req, res) => {
    const { cliente_id, data_compra } = req.body;

    try {
        const pedido = await Pedido.create({ cliente_id, data_compra });
        res.status(201).json(pedido);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar pedido' });
    }
};

exports.listarPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.findAll();
        res.status(200).json(pedidos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar os pedidos' });
    }
};

exports.alterarPedido = async (req, res) => {
    const { pedido_id } = req.params;
    const { cliente_id, data_compra } = req.body;

    try {
        const [updated] = await Pedido.update({ cliente_id, data_compra }, {
            where: { pedido_id }
        });

        if (updated) {
            const pedidoAtualizado = await Pedido.findByPk(pedido_id);
            res.status(200).json(pedidoAtualizado);
        } else {
            res.status(404).json({ error: 'Pedido não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao alterar pedido' });
    }
};

exports.excluirPedido = async (req, res) => {
    const { pedido_id } = req.params;

    try {
        const excluir = await Pedido.destroy({ where: { pedido_id } });

        if (excluir) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Pedido não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir o pedido' });
    }
};
