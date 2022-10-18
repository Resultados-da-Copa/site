module.exports = (sequelize, DataTypes) => {
    const corners = sequelize.define(
        'corners',
        {
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            id_player: {
                type: DataTypes.UUIDV4
            },
            id_match: {
                type: DataTypes.UUIDV4
            },
            id_team: {
                type: DataTypes.UUIDV4
            },
            minute: {
                type: DataTypes.INTEGER
            },
            createdAt:{
                type: DataTypes.DATE
            },
        },
        {
            tableName: "corners",
            timestamps: true,
            createdAt: "createdAt",
            updatedAt: false
        }
    ); 

    return corners;
}