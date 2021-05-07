const { RoundOfGolf } = require('../../models')
const router = require('express').Router()

router.post('/:id', async (req, res) => {
    try {
        console.log(typeof req.params.id);
        const roundOfGolf = await RoundOfGolf.create({ user_id: req.session.user_id, golfcourse_id: parseInt(req.params.id) });

        req.session.activeGolfCourseId = parseInt(req.params.id);
        req.session.activeRoundId = roundOfGolf.id;
        const activeRound = req.session.activeRoundId;
        console.log(activeRound)
        res.send("hello")
    } catch (err) {
        console.error(err);
        res.status(500).send("Couldnt create round");
    }
});

module.exports = router;