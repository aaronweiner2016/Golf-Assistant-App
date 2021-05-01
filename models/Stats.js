const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Stats extends Model {}

Stats.init(
  {
    stats_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },

    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    putt: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    fairway_hit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fairway_short: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    fairway_short: {
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
    modelName: 'stats',
  }
);

module.exports = Stats;
