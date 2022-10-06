module.exports = (sequelize, DataTypes) => {
    const player = sequelize.define(
        'players',
        {
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            team_id:{
                type: DataTypes.UUIDV4,
            },
            name:{
                type: DataTypes.STRING(100),
                allowNull: false
            },
            photograph:{
                type: DataTypes.STRING(500),
                allowNull: false
            },
            birth_date:{
                type: DataTypes.DATE,
                defaultValue: false,
            },
            nationality:{
                type: DataTypes.STRING(500),
                allowNull: false
            },
            weight:{
                type: DataTypes.DECIMAL(2, 2),
                allowNull: false
            },
            number: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            height: {
                type: DataTypes.DECIMAL(2, 2),
                allowNull: false,
            },
            foot: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
        },
        {
            tableName: "player",
        }
    ); 
    
    // player.belongsTo(team, {
    //     constraint: true,
    //     foreignKey: "id",
    // })

    return player;
}

