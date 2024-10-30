const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('./config/database');
const cliente = require('./models/cliente');

const Pedido = sequelize.define('Pedido', {
  pedido_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  data_compra: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },

});

Pedido.belongsTo(cliente, { foreignKey: 'cliente_id' });

module.exports = Pedido;