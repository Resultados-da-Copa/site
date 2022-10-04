const { DataTypes } = require('sequelize');
const { Sequelize } = require('.');
const sequelize = require('../config');
const Equipe = require('./EquipeModel');
const GrupoCampeonato = require('./GrupoCampeonatoModel');

const Partida = sequelize.define(
    'Partida',
     {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        GrupoCampeonatoID:{
            type: DataTypes.UUIDV4,
            references:{
                model: GrupoCampeonatoModel,
                key:"id",
            }
        },
        Equipe_MandanteID:{
            type: DataTypes.UUIDV4,
            references:{
                model: EquipeModel,
                key:"id",
            }
        },
        Equipe_VisitanteID:{
            type: DataTypes.UUIDV4,
            references:{
                model: EquipeModel,
                key:"id",
            }
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

Partida.belongsTo(GrupoCampeonato, {
    constraint: true,
    foreignKey: "GrupoCampeonatoID",
})
Partida.belongsTo(Equipe, {
    constraint: true,
    foreignKey: "Equipe_MandanteID",
})
Partida.belongsTo(Equipe, {
    constraint: true,
    foreignKey: "Equipe_VisitanteID",
})

module.exports = Partida;