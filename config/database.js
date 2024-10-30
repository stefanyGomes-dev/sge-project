const {Sequelize} = require('sequelize')

/*const sequelize = new Sequelize('sge', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});
*/

const sequelize = new Sequelize(
    {
        dialect: "sqlite",
        storage: "./database.sqlite"
    }
)

module.exports = sequelize;