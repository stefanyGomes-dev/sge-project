const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('Produto', {
    produto_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    produto_nome: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    produto_preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
});

module.exports = Produto;