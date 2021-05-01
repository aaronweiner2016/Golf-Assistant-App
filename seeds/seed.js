const sequelize = require('../config/connection');
const { User, GolfCourse, GolfHole, Handicap, RoundOfGolf } = require('../models');

const userData = require('./User.json');
const roundOfGolfData = require('./RoundOfGolf.json');
const handicapData = require('./Handicap.json');
const golfHoleData = require('./GolfHole.json');
const golfCourseData = require('./GolfCourse.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await GolfCourse.bulkCreate(golfCourseData, {
    individualHooks: true,
    returning: true,
  });

  await GolfHole.bulkCreate(golfHoleData, {
    individualHooks: true,
    returning: true,
  });

  await Handicap.bulkCreate(handicapData, {
    individualHooks: true,
    returning: true,
  });

  await RoundOfGolf.bulkCreate(roundOfGolfData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
