import Sequelize from 'sequelize'

const connection = new Sequelize('blog', 'root', 'susu1313',{
    host     : 'localhost',
    dialect  : 'mysql',
    logging  : false,
    timezone : '-03:00' 
})

export default connection