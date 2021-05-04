const { GolfHole, RoundOfGolf } = require('../../models')
const router = require('express').Router()

router.post('/', async (req, res) => {
    try {
        const activeRound = req.session.activeRoundId;
        console.log(req.session)
        const hole = await GolfHole.create({ ...req.body, round_id: activeRound }, { include: RoundOfGolf });
        // const round = await RoundOfGolf.findByPk(activeRound);

        // hole.addRoundOfGolf(round);
        console.log(hole)
        res.send("hello")
    } catch (err) {
        console.error(err);
        res.status(500).send("Couldnt create round");
    }
});

module.exports = router;