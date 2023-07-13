import Sequelize from 'sequelize'

const connection = new Sequelize('blog', 'root', 'susu1313',{
    host     : 'localhost',
    dialect  : 'mysql',
    timezone : '-03:00' 
})

export default connection