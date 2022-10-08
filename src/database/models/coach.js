module.exports = (sequelize, DataTypes) => {
    const coach = sequelize.define(
        'coach',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            teamId: {
                type: DataTypes.UUIDV4,
                field: 'team_id'
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
        },
        {
            tableName: "coach",
            timestamps: false
        }
    );

<<<<<<< HEAD
    /* coach.associate((models) => {
=======
    coach.associate((models) => {
>>>>>>> main
        coach.belongsTo(models.team, {
            constraint: true,
            foreignKey: "teamId",
    });
<<<<<<< HEAD
}); */
=======
});
>>>>>>> main

    return coach;
};