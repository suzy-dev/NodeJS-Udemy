import Sequelize from 'sequelize'
import connection from '../database/database.js'
import Category from '../categories/Category.js'

const Article = connection.define('articles',{
    title      : {type: Sequelize.STRING,  allowNull: false},
    body       : {type: Sequelize.TEXT,    allowNull: false},
    slug       : {type: Sequelize.STRING,  allowNull: false},
    categoryId : {type: Sequelize.INTEGER, allowNull: false}
})

Article.belongsTo(Category)

Article.sync({force: false}).then(() => {
     console.log("Article tabel created!")
})

export default Article