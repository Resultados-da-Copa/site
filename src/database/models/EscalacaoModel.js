const { DataTypes } = require('sequelize');
const { Sequelize } = require('.');
const sequelize = require('../config');
const Atleta = require('./AtletaModel');
const Partida = require('./PartidaModel');

const Escalacao = sequelize.define(
    'Escalacao',
     {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        AtletaID:{
            type: DataTypes.UUIDV4,
            references:{
                model: AtletaModel,
                key:"id",
            }
        },
        PartidaID:{
            type: DataTypes.UUIDV4,
            references:{
                model: PartidaModel,
                key:"id",
            }
        },
        jogadoresTitulares: {
            type: DataTypes.String,
            defaultValue: false,
            field: "jogadores_titulares",
        },
        jogadoresReservas: {
            type: DataTypes.INTEGER,
            defaultValue: false,
            field: "jogadores_reservas",
        },
        jogadoresCortados: {
            type: DataTypes.INTEGER,
            defaultValue: false,
            field: "jogadores_cortados",
        },
        dataCriacao:{
            type: DataTypes.DATE,
            field: "data_criacao",
        },
    },
    {
        tableName: "escalacoes",
        timestamps: true,
        createdAt: "dataCriacao",
    }
); 

Escalacao.hasMany(Atleta, {
    constraint: true,
    foreignKey: "AtletaID",
})
Escalacao.hasMany(Partida, {
    constraint: true,
    foreignKey: "PartidaID",
})

module.exports = Escalacao;