
const {Sequelize, DataTypes, Op,fn,col} = require('sequelize');
const sequelize = require('../../config/db.config1')

const db ={}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.Op = Op
db.fn = fn
db.col = col

db.k12 = require('./K12.model')(sequelize, DataTypes);
db.Enterprises = require('./enterprises.models')(sequelize,DataTypes);
db.HigherEd = require('./higherEd')(sequelize,DataTypes);
db.User = require('./user')(sequelize,DataTypes)
db.Device = require('./device.model')(sequelize,DataTypes)

db.sequelize.sync({alter : true})
.then(()=> {
    console.log('yes re-sync done!')
})


module.exports = db