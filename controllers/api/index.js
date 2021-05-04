const router = require('express').Router();

const userRoutes = require('./userRoutes');
const roundRoutes = require('./golf-round');
const holeRoutes = require('./holes')

router.use('/users', userRoutes);
router.use('/round', roundRoutes);
router.use('/holes', holeRoutes);


module.exports = router;
