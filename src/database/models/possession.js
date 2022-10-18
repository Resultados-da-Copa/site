module.exports = (sequelize, DataTypes) => {
    const possession = sequelize.define(
        'possession',
        {
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            id_match: {
                type: DataTypes.UUIDV4
            },
            id_home_team: {
                type: DataTypes.UUIDV4
            },
            id_viditor_team: {
                type: DataTypes.UUIDV4
            },
            createdAt:{
                type: DataTypes.DATE
            },
        },
        {
            tableName: "possession",
            timestamps: true,
            createdAt: "createdAt",
            updatedAt: false
        }
    ); 

    return possession;
}