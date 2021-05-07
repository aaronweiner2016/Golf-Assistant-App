const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RoundOfGolf extends Model { }

RoundOfGolf.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'round',
  }
);

module.exports = RoundOfGolf;
