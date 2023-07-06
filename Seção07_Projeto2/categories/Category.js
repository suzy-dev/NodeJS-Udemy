import Sequelize from 'sequelize'
import connection from '../database/database.js'
import Articles from '../articles/Article.js'

const Category = connection.define('categories',{
    title: {type: Sequelize.STRING, allowNull: false},
    slug:   {type: Sequelize.STRING, allowNull: false}
})

Category.hasMany(Articles)   // C HasMany A
Articles.belongsTo(Category) // A BelongsTo C 

Category.sync({force: false}).then(() => {
    console.log("Category tabel created!")
})  //is not necessary sync all time

export default Category

