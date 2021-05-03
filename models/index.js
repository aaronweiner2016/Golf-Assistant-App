const User = require('./User');
const RoundOfGolf = require('./RoundOfGolf');
const Handicap = require('./Handicap');
const GolfCourse = require('./GolfCourse');
const GolfHole = require('./GolfHole');

// USERS HAVE MANY ROUNDS
// User.hasMany(RoundOfGolf,{
//    foreignKey: 'user_id',
//    onDelete: 'CASCADE', 
// });

User.belongsToMany(GolfCourse, {through: RoundOfGolf,
foreignKey: "user_id"});

GolfCourse.belongsToMany(User, {through: RoundOfGolf,
foreignKey: "golfcourse_id"});

// USER HAS MANY HANDICAPS
User.hasMany(Handicap, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',

});

// A ROUND OF GOLF HAS MANY GOLF HOLES
RoundOfGolf.hasMany(GolfHole,{
    foreignKey: 'roundOfGolf_id',
  onDelete: 'CASCADE',

});

//  A USER HAS MANY GOLF HOLES IN A ROUND OF GOLF
// User.belongsToMany(GolfHole,{
//    through: 'RoundOfGolf',
//    foreignKey: 'user_id',
//   onDelete: 'CASCADE',

// })

// GolfCourse.hasMany(RoundOfGolf,{
//     foreignKey: 'golfCourse_id',
//     onDelete: 'CASCADE',

// })

module.exports = { User, Handicap, GolfHole, GolfCourse, RoundOfGolf};