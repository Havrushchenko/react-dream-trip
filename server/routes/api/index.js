const router = require('express').Router();
const userRoutes = require('./user-routes');
const flightoutRoutes = require('./flightout-routes');
const messageRoutes = require('./message-routes');

router.use('/users', userRoutes);
router.use('/flightouts', flightoutRoutes);
router.use('/messages', messageRoutes);

module.exports = router;