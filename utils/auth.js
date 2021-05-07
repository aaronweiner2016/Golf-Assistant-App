const { RoundOfGolf, GolfHole } = require('../models')
const Sequelize = require('sequelize')

const withAuth = async (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
