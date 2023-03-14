const router = require('express').Router();
const userRoutes = require('./user-routes');
const flightoutRoutes = require('./flightout-routes');
const messageRoutes = require('./message-routes');

router.use('/users', userRoutes);
router.use('/flightouts', flightoutRoutes);
<<<<<<< HEAD
router.use('/flights', flightCheckoutRoutes);
router.use('/flights/passengers', passengerRoutes);
=======
router.use('/messages', messageRoutes);
>>>>>>> 2f8379d26be05a1233728af9ddca8a23f31618e1

module.exports = router;