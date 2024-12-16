
const {Sequelize, DataTypes, Op,fn,col} = require('sequelize');
const sequelize = require('../../config/db.config1')

const db ={}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.Op = Op
db.fn = fn
db.col = col


db.User = require('./user')(sequelize,DataTypes)
db.Device = require('./device.model')(sequelize,DataTypes)
db.Inspection = require('./inspection.model')(sequelize,DataTypes)
db.Department = require('./department.model')(sequelize,DataTypes)
db.username_uuid = require('./username_uuid.model')(sequelize,DataTypes)

db.sequelize.sync({alter:true})
.then(()=> {
    console.log('yes re-sync done!')
})


module.exports = db