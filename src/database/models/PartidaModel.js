const { DataTypes } = require('sequelize');
const { Sequelize } = require('.');
const sequelize = require('../config')

const Partida = sequelize.define(
    'Partida',
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
        Partida_iniciada: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        Partida_finalizada: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        Partida_pausada: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        dataCriacao:{
            type: DataTypes.DATE,
            field: "data_criacao",
        },
     },
    {
        tableName: "partidas",
        timestamps: true,
        createdAt: "dataCriacao",
    }
); 

module.exports = Partida;