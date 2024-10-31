const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

router.get('/pedidos', pedidoController.criarPedido);
router.post('/pedidos', pedidoController.listarPedidos);
router.put('/pedidos/:pedido_id', pedidoController.alterarPedido);
router.delete('/pedidos/:pedido_id', pedidoController.excluirPedido);

module.exports = router;

