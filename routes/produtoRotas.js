const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.post('/produto', produtoController.criarProduto);
router.get('/produtos', produtoController.todosProdutos);

router.put('/produto/:id', produtoController.alterarProduto);
router.delete('/produto/:id', produtoController.excluirProduto);

module.exports = router;

