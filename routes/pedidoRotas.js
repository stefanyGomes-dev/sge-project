const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

router.get('/pedidos', pedidoController.criarPedido);
router.post('/pedidos', pedidoController.listarPedidos);


router.put('/pedido/:id', pedidoController.alterar);
router.delete('/pedido/:id', produtoController.excluirProduto);

module.exports = router;

