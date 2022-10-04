const { DataTypes } = require('sequelize');
const { Sequelize } = require('.');
const sequelize = require('../config');
const FaseCampeonato = require('./FaseCampeonatoModel');

const GrupoCampeonato = sequelize.define(
    'GrupoCampeonato',
     {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        FaseCampeonatoID:{
            type: DataTypes.UUIDV4,
            references:{
                model: FaseCampeonatoIDModel,
                key:"id",
            }
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


GrupoCampeonato.hasMany(FaseCampeonato, {
    constraint: true,
    foreignKey: "FaseCampeonatoID",
})

module.exports = GrupoCampeonato;