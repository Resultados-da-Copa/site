module.exports = (sequelize, DataTypes) => {
    const players = sequelize.define(
        'players',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            team_id: {
                type: DataTypes.UUIDV4,
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            picture: {
                type: DataTypes.STRING(500),
                allowNull: false
            },
            birth_date: {
                type: DataTypes.DATE,
                defaultValue: false,
            },
            weight: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            number: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            height: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            foot: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            position: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            createdAt:{
                type: DataTypes.DATE,
            },
        },
        {
            tableName: "players",
            timestamps: true,
            createdAt: "createdAt",
            updatedAt: false
        }
    );

    /* player.belongsTo.associate((models) => {
    player.belongsTo(team, {
        constraint: true,
        foreignKey: "teamID",
        });
    }); */

    return players;
}

