module.exports = (sequelize, DataTypes) => {
    const championship = sequelize.define(
        'championship',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            startedChampionship: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                field: 'started_championship'
            },
            finishedChampionship: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                field: 'finished_championship'
            },
            stoppedChampionship: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                field: 'stopped_championship'
            },
            createdAt: {
                type: DataTypes.DATE,
            },
        },
        {
            tableName: "championship",
            timestamps: true,
            createdAt: "createdAt",
            updatedAt: false
        }
    );

    return championship;
}