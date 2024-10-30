
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post('/clientes', ClienteController.criarCliente);
router.get('/clientes', ClienteController.todosClientes);

module.exports = router;