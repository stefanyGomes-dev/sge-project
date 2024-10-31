
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post('/clientes', clienteController.criarCliente);
router.get('/clientes', clienteController.listarClientes);
router.put('/clientes/:cliente_id', clienteController.alterarCliente);
router.delete('/clientes/:cliente_id', clienteController.excluirCliente);

module.exports = router;