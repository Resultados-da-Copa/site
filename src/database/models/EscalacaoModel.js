const { DataTypes } = require('sequelize');
const { Sequelize } = require('.');
const sequelize = require('../config');
const Atleta = require('./AtletaModel');

const Escalacao = sequelize.define(
    'Escalacao',
     {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
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

Escalacao.belongsTo(Atleta, {
    constraint: true,
    foreignKey: "AtletaID",
})

module.exports = Escalacao;