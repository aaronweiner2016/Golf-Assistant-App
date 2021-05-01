const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GolfHole extends Model {}

GolfHole.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    roundOfGolf_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    holeNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    numberOfStrokes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    numberOfPutts: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    fairwayHit: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },

    greenHit: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,

    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'golfhole',
  }
);

module.exports = GolfHole;
