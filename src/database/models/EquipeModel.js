const { DataTypes } = require('sequelize');
const { Sequelize } = require('.');
const sequelize = require('../config')

const Equipe = sequelize.define(
    'Equipe',
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
        sigla:{
            type: DataTypes.STRING(100),
            defaultValue: false,
        },
        bandeira:{
            type: DataTypes.STRING(500),
            allowNull: false
        },
        dataCriacao:{
            type: DataTypes.DATE,
            field: "data_criacao",
        },
     },
    {
        tableName: "equipes",
        timestamps: true,
        createdAt: "dataCriacao",
    }
); 

module.exports = Equipe;