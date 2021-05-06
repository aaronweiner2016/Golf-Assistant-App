const { Stats, RoundOfGolf } = require('../../models')
const router = require('express').Router()


router.post('/', async (req, res) => {
    try {
        const activeRound = req.session.activeRoundId;
        console.log("SESSION", req.session.created_at)
        const stats = await Stats.create({ ...req.body, roundId: activeRound, userId: req.session.user_id }, { include: RoundOfGolf });
        console.log(stats)
        res.send("hello")
    } catch (err) {
        console.error(err);
        res.status(500).send("Couldnt create round");
    }
});

module.exports = router;