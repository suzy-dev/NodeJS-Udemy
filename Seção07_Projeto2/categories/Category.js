import Sequelize from 'sequelize'
import connection from '../database/database.js'
import Articles from '../articles/Article.js'

const Category = connection.define('categories',{
    titulo: {type: Sequelize.STRING, allowNull: false},
    slug:   {type: Sequelize.STRING, allowNull: false}
})

Category.hasMany(Articles)   // C HasMany A
Articles.belongsTo(Category) // A BelongsTo C 

Category.sync({force: true}).then(() => {
    console.log("Category tabel created!")
})

export default Category

