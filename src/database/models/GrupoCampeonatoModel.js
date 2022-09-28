const { DataTypes } = require('sequelize');
const { Sequelize } = require('.');
const sequelize = require('../config')

const GrupoCampeonato = sequelize.define(
    'GrupoCampeonato',
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
        dataCriacao:{
            type: DataTypes.DATE,
            field: "data_criacao",
        },
     },
    {
        tableName: "grupos_campeonato",
        timestamps: true,
        createdAt: "dataCriacao",
    }
); 

module.exports = GrupoCampeonato;