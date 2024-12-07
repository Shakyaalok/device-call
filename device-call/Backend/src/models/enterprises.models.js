module.exports = (sequelize,DataTypes)=>{
    const Enterprises = sequelize.define('enterprises',{
        category_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        module_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        imageUrl:{
            type:DataTypes.STRING,
            allowNull:false
          }
    },{timestamps:false})

    return Enterprises
}