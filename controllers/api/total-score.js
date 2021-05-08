const { response } = require('express');
const { Stats, RoundOfGolf, GolfCourse, GolfHole, Handicap } = require('../../models')
const router = require('express').Router()
const withAuth = require("../../utils/auth");

router.post('/', async (req, res) => {
    try {
        const activeRound = req.session.activeRoundId;
        const stats = await Stats.create({ ...req.body, roundId: activeRound, userId: req.session.user_id }, { include: RoundOfGolf });

        const golfCourse = await GolfCourse.findOne({
            where: req.session.activeCourseId,
            raw: true
        })

        console.log(golfCourse.course_name);
        console.log(req.body.totalScore)
        const handicapVal = req.body.totalScore - golfCourse.rating * 113 / golfCourse.slope
        console.log(handicapVal)
        const handicap = await Handicap.create({
            user_id: req.session.user_id,
            handicap_value: handicapVal
        });

        res.send("hello")
    } catch (err) {
        console.error(err);
        res.status(500).send("Couldnt create round");
    }
});


router.get('/', withAuth, async (req, res) => {
    try {
        const statsData = await Stats.findAll()
        const statsAll = statsData.map((data) => data.dataValues);
        console.log('testing API stats route')
        console.log(statsAll)
        res.send(statsAll);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;