const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./Cliente');
const Pedido = require('./Pedido');

const DetalhePedido = sequelize.define('DetalhePedido', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cliente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    pedido_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    data_pedido: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
});

DetalhePedido.belongsTo(Cliente, { 
    foreignKey: 'cliente_id', 
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE',
});

DetalhePedido.belongsTo(Pedido, { 
    foreignKey: 'pedido_id', 
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE',
});

module.exports = DetalhePedido;
