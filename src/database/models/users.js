module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define(
        'users',
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
            email: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            password: {
                allowNull: false,
                type: DataTypes.STRING(500),
            },
            birth_date: {
                type: DataTypes.DATE,
                defaultValue: false,
            },
            photograph: {
                type: DataTypes.STRING(500),
                allowNull: false
            },
            createdAt: {
                type: DataTypes.DATE
            },
        },
        {
            tableName: "users",
            timestamps: true,
            updatedAt: false
        }
    );
    
    /* users.associate((models) => {
        users.belongsTo(team, {
            constraint: true,
            foreignKey: "teamID",
        });
    }); */

    return users;
}