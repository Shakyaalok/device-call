module.exports = (sequelize, DataTypes) => {
    const Inspection = sequelize.define('inspection', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            unique: true,
            primaryKey: true
        },
        device_id: {
            type: DataTypes.STRING,
        },
        inspector_name: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        school_name: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        department_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        complain: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        created_by_name: {
            type: DataTypes.STRING,
        }
    },
        {
            timestamps: true,
            createdAt: 'createdAt',
            updatedAt: false,
        })
    return Inspection
}