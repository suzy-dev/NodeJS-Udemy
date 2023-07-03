import Sequelize from 'sequelize'
import connection from '../database/database.js'

const Article = connection.define('articles',{
    titulo: {type: Sequelize.STRING, allowNull: false},
    body  : {type: Sequelize.TEXT,   allowNull: false},
    slug  : {type: Sequelize.STRING, allowNull: false}
})

Article.sync({force: true}).then(() => {
    console.log("Article tabel created!")
})

export default Article