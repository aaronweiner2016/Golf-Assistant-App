// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection.js');
// class Notes extends Model { };

Notes.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'notes',
    }
);

module.exports = Notes;