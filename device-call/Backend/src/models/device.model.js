module.exports = (sequelize,DataTypes)=>{
    const Device = sequelize.define('devices',{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            unique:true,
            primaryKey:true
        },
        device_id:{
         type:DataTypes.STRING,
         unique:true
        },
        inspector_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        school_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        status:{
            type:DataTypes.ENUM('active','inactive'),
          },
        device_launch:{
            type:DataTypes.BOOLEAN,
            defaultValue:0
        },
        force_update:{
            type:DataTypes.BOOLEAN,
            defaultValue:0
        },
        firebase_token:{
            type:DataTypes.STRING,
            defaultValue:null
        }
    },{timestamps:false})

    return Device
}