const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pedido = require('./pedido'); // Importando o modelo Pedido
const Produto = require('./produto'); // Importando o modelo Produto

const DetalhePedido = sequelize.define('DetalhePedido', { // Nome do modelo em maiúsculo
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: true, // pode ser null se não houver obrigatoriedade
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true, // pode ser null se não houver obrigatoriedade
    },
    desconto: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true, // pode ser null se não houver obrigatoriedade
    },
    pedido_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Pedido,
            key: 'pedido_id',
        },
    },
    produto_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Produto,
            key: 'produto_id',
        },
    },
});

// Relacionamento: Um DetalhePedido pertence a um Pedido
DetalhePedido.belongsTo(Pedido, {
    foreignKey: 'dp_pedido_id',
    as: 'pedido', // Alias para o relacionamento
});

// Relacionamento: Um DetalhePedido pertence a um Produto
DetalhePedido.belongsTo(Produto, {
    foreignKey: 'dp_produto_id',
    as: 'produto', // Alias para o relacionamento
});

module.exports = DetalhePedido;
