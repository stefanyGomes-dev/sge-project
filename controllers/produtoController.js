const Produto = require('../models/produto');

exports.criarProduto = async (req, res) => {
    const { produto_nome, produto_preco } = req.body;

    try {
        const produto = await Produto.create({ produto_nome, produto_preco });
        res.status(201).json(produto);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar produto' });
    }
};

exports.listarProdutos = async (req, res) => {
    try {
        const produtos = await Produto.findAll();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
};

exports.alterarProduto = async (req, res) => {
    const { produto_id } = req.params;
    const { produto_nome, produto_preco } = req.body;

    try {
        const [updated] = await Produto.update({ produto_nome, produto_preco }, {
            where: { produto_id }
        });

        if (updated) {
            const produtoAtualizado = await Produto.findByPk(produto_id);
            res.status(200).json(produtoAtualizado);
        } else {
            res.status(404).json({ error: 'Produto não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao alterar produto' });
    }
};

exports.excluirProduto = async (req, res) => {
    const { produto_id } = req.params;

    try {
        const excluir = await Produto.destroy({ where: { produto_id } });

        if (excluir) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Produto não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir o produto' });
    }
};
