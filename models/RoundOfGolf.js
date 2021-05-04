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
    // roundOfGolf_id: {
    //   type: DataTypes.INTEGER,
    //   unique: false,
    // },
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   unique: false,
    // }
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
