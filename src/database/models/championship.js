const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const championship = sequelize.define(
    'championship',
    {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        started_championship: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        finished_championship: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        stopped_championship: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        createdAt:{
            type: DataTypes.DATE,
        },
    },
    {
        tableName: "championship",
        timestamps: true,
        createdAt: "createdAt",
    }
); 

module.exports = championship;