const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GolfCourse extends Model { }

GolfCourse.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    course_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    par: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    slope: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'golfcourse',
  }
);

module.exports = GolfCourse;
