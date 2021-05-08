const User = require('./User');
const RoundOfGolf = require('./RoundOfGolf');
const Handicap = require('./Handicap');
const GolfCourse = require('./GolfCourse');
const GolfHole = require('./GolfHole');
const Stats = require('./Stats');


User.belongsToMany(GolfCourse, {
  through: { model: RoundOfGolf, unique: false },
  foreignKey: "user_id"
});

GolfCourse.belongsToMany(User, {
  through: { model: RoundOfGolf, unique: false },
  foreignKey: "golfcourse_id"
});

// USER HAS MANY HANDICAPS
User.hasMany(Handicap, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

GolfHole.belongsTo(RoundOfGolf)

// A ROUND OF GOLF HAS MANY GOLF HOLES
RoundOfGolf.hasMany(GolfHole, {
  foreignKey: 'round_id',
  onDelete: 'CASCADE',
});

User.hasMany(Stats, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})

Stats.belongsTo(User)

Stats.belongsTo(RoundOfGolf)

module.exports = { User, Handicap, GolfHole, GolfCourse, RoundOfGolf, Stats };