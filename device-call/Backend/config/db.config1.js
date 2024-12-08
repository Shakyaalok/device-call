const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
    process.env.DB_DATABSE_SCHEMA,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,{
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    }
)


sequelize.authenticate()
.then(()=>{
    console.log('connected with DB')
}).catch(err =>{
    console.log('error---> '+ err)
})


module.exports = sequelize