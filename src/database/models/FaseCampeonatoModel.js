const { DataTypes } = require('sequelize');
const { Sequelize } = require('.');
const sequelize = require('../config');
const Campeonato = require('./CampeonatoModel');

const FaseCampeonato = sequelize.define(
    'FaseCampeonato',
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
        fase_iniciada: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        fase_finalizada: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        fase_pausada: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        dataCriacao:{
            type: DataTypes.DATE,
            field: "data_criacao",
        },
     },
    {
        tableName: "fases_campeonato",
        timestamps: true,
        createdAt: "dataCriacao",
    }
); 


FaseCampeonato.hasMany(Campeonato, {
    constraint: true,
    foreignKey: "CampeonatoID",
})

module.exports = FaseCampeonato;