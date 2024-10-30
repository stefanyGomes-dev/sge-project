
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post('/cliente', clienteController.criarCliente);
router.get('/clientes', clienteController.todosClientes);

router.put('/cliente/:id', clienteController.alterarCliente);
router.delete('/cliente/:id', clienteController.excluirCliente);

module.exports = router;