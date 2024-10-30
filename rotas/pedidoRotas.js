const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

router.get('/pedidos', pedidoController.criarPedido);
router.post('/pedidos', pedidoController.listarPedidos);

module.exports = router;

