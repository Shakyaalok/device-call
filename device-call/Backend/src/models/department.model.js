module.exports = (sequelize,DataTypes)=>{
    const Department = sequelize.define('department',{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            unique:true,
            primaryKey:true
        },
        department_name:{
            type: DataTypes.TEXT,
            allowNull:false
        }
    },{timestamps:false})

    return Department
}