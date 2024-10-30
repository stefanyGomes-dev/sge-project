const Pedido = require('../models/Pedido');

exports.criarPedido = async (req, res) => {
  const {cliente_id} = req.body;

  try {
    const pedido = await Pedido.create({cliente_id});
    res.json(pedido);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar pedido' });
  }
};

exports.listarPedidos = async (req, res) => {

  try {
    const pedidos = await Pedido.findAll()
    res.status(200).json(pedidos)
  } catch (error) {
    res.status(500).json({error: 'Erro ao listar os pedidos'})
  }
};

exports.alterarPedido = async(req, res) => {
    try {
        const {pedido_id} = req.params;
        const {cliente_id} = req.body;

        const [updated] = await pedido.update({cliente_id}, {
            where: {
                pedido_id
            }
        });

        if(updated) {
            const pedidoAtualizado = await pedido.findByPk(id);
            res.status(200).json(pedidoAtualizado);
        } else {
            res.status(404).json({
                error: "Pedido não encontrado"
            })
        }
    } catch(error) {
        res.status(500).json({error: "Erro ao alterar pedido"});
    }
};

exports.excluirCliente = async (req, res) => {
    try {
        const {pedido_id} = req.params;
        const excluir = await cliente.destroy({where: {pedido_id}});

        if(excluir) {
            res.status(204).send();
        } else {
            res.status(404).json({error: "pedido não encontrado"});
        }
    } catch(error) {
        res.status(500).json({error: "Erro ao excluir o pedido"})
    }
};