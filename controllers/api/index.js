const router = require('express').Router();

const userRoutes = require('./userRoutes');
const roundRoutes = require('./golf-round');
const holeRoutes = require('./holes');
const stats = require('./total-score')

router.use('/users', userRoutes);
router.use('/round', roundRoutes);
router.use('/holes', holeRoutes);
router.use('/stats', stats);


module.exports = router;
