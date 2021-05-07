const { Stats, RoundOfGolf, GolfCourse, GolfHole, Handicap } = require('../../models')
const router = require('express').Router()


router.post('/', async (req, res) => {
    try {
        const activeRound = req.session.activeRoundId;
        // console.log("SESSION", req.session.created_at)
        const stats = await Stats.create({ ...req.body, roundId: activeRound, userId: req.session.user_id }, { include: RoundOfGolf });
        // console.log(stats)
        // const courseStats = await Stats.findAll(
        //     { where: activeRound },
        //     {
        //         include:
        //             [{
        //                 model: GolfHole,
        //                 through:
        //                     { round_id: activeRound, as: { round_id: activeRound } }
        //             }]
        //     })
        // console.log("COURSE STATS", courseStats)




        // const roundAndCourse = await RoundOfGolf.findOne({
        //     where: req.session.activeRoundId,
        //     // include: [{
        //     //     model: GolfCourse
        //     // }]
        // })

        const golfCourse = await GolfCourse.findOne({
            where: req.session.activeCourseId,
            raw: true
        })

        console.log(golfCourse);
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

// router.get('/stats', async (req, res) => {
//     // create a new category
//     try {
//         const courseData = await GolfCourse.FindAll();
//         console.log(courseData)
//         res.status(200).json(categoryData);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

module.exports = router;