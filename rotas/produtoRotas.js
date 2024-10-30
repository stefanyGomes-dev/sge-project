const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.post('/produtos', produtoController.criarProduto);
router.get('/produto', produtoController.todosProdutos);

router.put('/produtos/:id', produtoController.alterarProduto)
router.delete('/produtos/:id', produtoController.excluirProduto)

module.exports = router;

