const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./Cliente'); 
const Produto = require('./Produto');

const Pedido = sequelize.define('Pedido', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cliente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    produto_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    data_compra: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW, 
    },
});


Pedido.belongsTo(Cliente, { foreignKey: 'cliente_id' });
Pedido.belongsTo(Produto, { foreignKey: 'produto_id' });

module.exports = Pedido;
