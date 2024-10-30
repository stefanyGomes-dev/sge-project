const Produto = require("../models/produto");

exports.criarProduto = async (req, res) => {
    try {
        const {nome} = req.body;
        const produto = await Produto.create({nome});
        res.status(201).json(produto);
    } catch(error) {
        res.status(500).json({
            error: "Erro ao criar produto"
        });
    }
};


exports.todosProdutos = async (req, res) => {
    try {
        const produtos = await Produto.findAll(); // Busca todos os produtos
        res.status(200).json(produtos); // Retorna os produtos encontrados
    } catch (error) {
        res.status(500).json({
            error: "Erro ao buscar produtos"
        });
    }
};

exports.alterarProduto = async(req, res) => {
    try {
        const {id} = req.params;
        const {nome} = req.body;

        const [updated] = await Produto.update({nome}, {
            where: {
                id
            }
        });

        if(updated) {
            const produtoAtualizado = await Produto.findByPk(id);
            res.status(200).json(produtoAtualizado);
        } else {
            res.status(404).json({
                error: "Produto não encontrado"
            })
        }
    } catch(error) {
        res.status(500).json({error: "Erro ao alterar produto"});
    }
};

exports.excluirProduto = async (req, res) => {
    try {
        const {id} = req.params;
        const excluir = await Produto.destroy({where: {id}});

        if(excluir) {
            res.status(204).send();
        } else {
            res.status(404).json({error: "Produto não encontrado"});
        }
    } catch(error) {
        res.status(500).json({error: "Erro ao excluir o produto"})
    }
}