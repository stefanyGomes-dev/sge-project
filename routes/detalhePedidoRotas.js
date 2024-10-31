const express = require('express');
const router = express.Router();
const detalhePedidoController = require('../controllers/detalhePedidoController');

router.get('/detalhesPedido', detalhePedidoController.listarDetalhesPedido);
router.post('/detalhesPedido', detalhePedidoController.criarDetalhePedido);
router.put('/detalhesPedido/:id', detalhePedidoController.alterarDetalhePedido);
router.delete('/detalhesPedido/:id', detalhePedidoController.criarDetalhePedido);

module.exports = router;

