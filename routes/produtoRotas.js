const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.post('/produtos', produtoController.criarProduto);
router.get('/produtos', produtoController.listarProdutos);
router.put('/produtos/:produto_id', produtoController.alterarProduto);
router.delete('/produtos/:produto_id', produtoController.excluirProduto);

module.exports = router;

