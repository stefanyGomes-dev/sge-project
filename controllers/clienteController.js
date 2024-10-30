const cliente = require("../models/cliente");

exports.criarCliente = async (req, res) => {
    try {
        const {nome} = req.body;
        const cliente = await cliente.create({nome});
        res.status(201).json(cliente);
    } catch(error) {
        res.status(500).json({
            error: "Erro ao criar cliente"
        });
    }
};


exports.todosClientes = async (req, res) => {
    try {
        const clientes = await cliente.find(); // Busca todos os clientes
        res.status(200).json(clientes); // Retorna os clientes encontrados
    } catch (error) {
        res.status(500).json({
            error: "Erro ao buscar clientes"
        });
    }
};

exports.alterarCliente = async(req, res) => {
    try {
        const {id} = req.params;
        const {nome} = req.body;

        const [updated] = await cliente.update({nome}, {
            where: {
                id
            }
        });

        if(updated) {
            const clienteAtualizado = await cliente.findByPk(id);
            res.status(200).json(clienteAtualizado);
        } else {
            res.status(404).json({
                error: "cliente não encontrado"
            })
        }
    } catch(error) {
        res.status(500).json({error: "Erro ao alterar cliente"});
    }
};

exports.excluirCliente = async (req, res) => {
    try {
        const {id} = req.params;
        const excluir = await cliente.destroy({where: {id}});

        if(excluir) {
            res.status(204).send();
        } else {
            res.status(404).json({error: "cliente não encontrado"});
        }
    } catch(error) {
        res.status(500).json({error: "Erro ao excluir o cliente"})
    }
}