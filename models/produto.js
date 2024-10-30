const {  DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const produto = sequelize.define('produto', {
id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,

},
nome: {
        type: DataTypes.STRING,
        allowNull: false,  
 },
});

module.exports = produto;