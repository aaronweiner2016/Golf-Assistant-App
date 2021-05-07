const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, GolfCourse, RoundOfGolf, Handicap, GolfHole, Stats } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const handicapQuery = `SELECT AVG(handicap_value) FROM handicap where user_id = ${req.session.user_id}`;

    const handicapData = await sequelize.query(handicapQuery, {
      type: sequelize.QueryTypes.SELECT
    });

    const handicap = Math.round(handicapData[0]['AVG(handicap_value)']).toFixed(1);

    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData;
    let statsData = await Stats.findAll({ where: { user_id: req.session.user_id } })
    const stats = statsData.map((data) => data.get({ plain: true }))

    const golfCourse = await GolfCourse.findOne({
      where: req.session.activeCourseId,
      raw: true
    })

    res.render('homepage', {
      golfCourse,
      stats,
      users,
      handicap,
      name: req.session.name,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/sign-up', async (req, res) => {
  res.render('sign-up', {
    logged_in: req.session.logged_in,
  });
});

router.get('/post-score', withAuth, async (req, res) => {
  try {
    res.render('post-score', {
      name: req.session.name,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/stats', withAuth, async (req, res) => {
  try {
    res.render('stats', {
      name: req.session.name,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/handicap-calc', withAuth, async (req, res) => {
  try {
    res.render('handicap-calc', {
      name: req.session.name,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/new-game', withAuth, async (req, res) => {
  try {
    const courseData = await GolfCourse.findAll();

    const courses = courseData.map((data) => data.get({ plain: true }));
    res.render('new-game', {
      courses,
      name: req.session.name,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/score-card', withAuth, async (req, res) => {
  try {
    const activeRound = req.session.activeRoundId;
    let scoreData = await GolfHole.findAll({ where: { round_id: activeRound } })

    let sumScore = 0;
    for (var i = 0; i < 3; i++) {
      sumScore += scoreData[i].numberOfStrokes
    }

    let sumPutts = 0;
    for (var i = 0; i < 3; i++) {
      sumPutts += scoreData[i].numberOfPutts
    }

    res.render('score-card', {
      sumPutts,
      sumScore,
      name: req.session.name,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
