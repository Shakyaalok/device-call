module.exports = (sequelize,DataTypes)=>{
    const username_uuid = sequelize.define('username_uuid',{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            unique:true,
            primaryKey:true
        },
        device_id:{
         type:DataTypes.STRING,
        //  unique:true
        },
        uuid:{
            type:DataTypes.INTEGER,
            // unique:true
        }
       
    },{timestamps:false})

    return username_uuid
}