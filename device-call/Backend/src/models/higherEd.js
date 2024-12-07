module.exports = (sequelize,DataTypes)=>{

    const HigherEd = sequelize.define('higher_ed',{
        category_id:{
            type:DataTypes.INTEGER,
            allowNull:false
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
        },
        main_description:{
            type:DataTypes.STRING,
          },
          videoUrl:{
            type:DataTypes.STRING
          }
    },{timestamps:false})

    return HigherEd;
}