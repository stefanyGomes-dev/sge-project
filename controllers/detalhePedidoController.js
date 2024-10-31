const DetalhePedido = require('../models/detalhePedido');

exports.criarDetalhePedido = async (req, res) => {
    try {
        const { quantidade, preco, desconto, pedido_id, produto_id } = req.body;
        const detalhePedido = await DetalhePedido.create({ quantidade, preco, desconto, pedido_id, produto_id });
        res.status(201).json(detalhePedido);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao criar detalhe do pedido"
        });
    }
};

exports.listarDetalhesPedido = async (req, res) => {
    try {
        const detalhes = await DetalhePedido.findAll(); // Busca todos os detalhes de pedidos
        res.status(200).json(detalhes); // Retorna os detalhes encontrados
    } catch (error) {
        res.status(500).json({
            error: "Erro ao buscar detalhes do pedido"
        });
    }
};

exports.alterarDetalhePedido = async (req, res) => {
    try {
        const { id } = req.params; // Supondo que 'id' seja o identificador do detalhe do pedido
        const { quantidade, preco, desconto, pedido_id, produto_id } = req.body;

        const [updated] = await DetalhePedido.update({ quantidade, preco, desconto, pedido_id, produto_id }, {
            where: { id }
        });

        if (updated) {
            const detalheAtualizado = await DetalhePedido.findByPk(id);
            res.status(200).json(detalheAtualizado);
        } else {
            res.status(404).json({
                error: "Detalhe do pedido não encontrado"
            });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro ao alterar detalhe do pedido" });
    }
};

exports.excluirDetalhePedido = async (req, res) => {
    try {
        const { id } = req.params;
        const excluir = await DetalhePedido.destroy({ where: { id } });

        if (excluir) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: "Detalhe do pedido não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro ao excluir o detalhe do pedido" });
    }
};
