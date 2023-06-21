const sequelize = require('sequelize')
const connection = new sequelize('projeto_perguntas_respostas','root','susu1313',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection