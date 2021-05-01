const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RoundOfGolf extends Model {}

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
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'roundofgolf',
  }
);

module.exports = RoundOfGolf;
