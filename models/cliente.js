const { DataTypes } = require('sequilize');
const sequilize = require('../config/database');

const cliente = sequilize.define('Cliente', {
    cliente_id:  {
        types: DataTypes.INTEGER,
        primaryKay: true,
        autoIncrement: true,
    },
    nome: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

});

module.exports = cliente;