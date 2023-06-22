const sequelize = require('sequelize')
const connection = require('./database')

const Resposta = connection.define('resposta',{
    resposta: {type: sequelize.TEXT, allowNull: false},
    perguntaId: {type:sequelize.INTEGER, allowNull: false}
})

Resposta.sync({force:false}).then(()=>{
    console.log("tabela de resposta criada")
})

module.exports = Resposta