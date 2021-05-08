const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Stats extends Model { }

Stats.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },
        totalScore: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        totalPutts: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'Stats',
    }
);

module.exports = Stats;