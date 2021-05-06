const { RoundOfGolf, GolfHole } = require('../models')
const Sequelize = require('sequelize')

const withAuth = async (req, res, next) => {
  // console.log('REQ SESSION', req.session)
  // if (!req.session.activeRoundId) {
  //   const roundsData = await RoundOfGolf.findAll({
  //     attributes: {
  //       include: [[Sequelize.fn("COUNT", Sequelize.col("golfHole.holeNumber")), "holeCount"]]
  //     },
  //     include: [{
  //       model: GolfHole, attributes: []
  //     }]
  //   });

  //   console.log('ROUND DATA', roundsData);
  //   const rounds = roundsData.map(round => round.get({ plain: true }));

  //   console.log('ROUNDS', rounds);
  //   const activeRounds = rounds.filter(round => round.holeCount < 18);
  //   console.log('ACTIVE rounds', activeRounds);
  //   if (activeRounds.length) req.session.activeRoundId = activeRounds[activeRounds.length - 1].id;
  // }
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
