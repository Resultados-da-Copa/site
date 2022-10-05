const { DataTypes } = require('sequelize');
const { Sequelize } = require('.');
const sequelize = require('../config')

const team = sequelize.define(
    'team',
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
        abbreviation:{
            type: DataTypes.STRING(100),
            defaultValue: false,
        },
        flag:{
            type: DataTypes.STRING(500),
            allowNull: false
        },
        createdAt:{
            type: DataTypes.DATE,
        },
    },
    {
        tableName: "teams",
        timestamps: true,
        createdAt: "createdAt",
    }
); 

module.exports = team;