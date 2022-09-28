const { DataTypes } = require('sequelize');
const { Sequelize } = require('.');
const sequelize = require('../config')

const Campeonato = sequelize.define(
    'Campeonato',
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
        campeonato_iniciado: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        campeonato_finalizado: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        campeonato_pausado: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        dataCriacao:{
            type: DataTypes.DATE,
            field: "data_criacao",
        },
     },
    {
        tableName: "campeonatos",
        timestamps: true,
        createdAt: "dataCriacao",
    }
); 

module.exports = Campeonato;