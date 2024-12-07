
module.exports=(sequelize, DataTypes)=>{

    const K12 = sequelize.define('k12', {
      id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },      
      category_id:{
          type: DataTypes.INTEGER,
          allowNull: false
      },
      grade:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      subjectName:{
        type:DataTypes.STRING,
        allowNull:false
      },
      module_name:{
        type:DataTypes.STRING,
        allowNull:false
      },
      topic_name:{
        type:DataTypes.STRING,
        allowNull:false,
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
    },{timestamps:false});

    return K12;
}
