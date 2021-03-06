const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Handicap extends Model { }

Handicap.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,

    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      }
    },
    handicap_value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }

  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'handicap',
  }
);

module.exports = Handicap;
