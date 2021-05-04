const router = require('express').Router();

const userRoutes = require('./userRoutes');
const roundRoutes = require('./golf-round');

router.use('/users', userRoutes);
router.use('/round', roundRoutes);


module.exports = router;
