const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./cliente'); 

const Pedido = sequelize.define('Pedido', { 
    pedido_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    data_compra: {
        type: DataTypes.DATE,
        allowNull: true, 
    },
    cliente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Cliente,
            key: 'cliente_id',
        },
    },
});

// Relacionamento: Um Pedido pertence a um Cliente
Pedido.belongsTo(Cliente, {
    foreignKey: 'cliente_id',
    as: 'cliente',
});

module.exports = Pedido;
