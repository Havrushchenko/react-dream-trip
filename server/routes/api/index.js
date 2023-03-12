const router = require('express').Router();
const userRoutes = require('./user-routes');
<<<<<<< HEAD
const flightoutRoutes = require('./flightout-routes')

router.use('/users', userRoutes);
router.use('/flightouts', flightoutRoutes);
=======
const flightCheckoutRoutes = require('./flightcheckout-routes');
const passengerRoutes = require('./passenger-routes');

router.use('/users', userRoutes);
router.user('/users/flights', flightCheckoutRoutes);
router.user('/users/flights/passengers', passengerRoutes);
>>>>>>> 7f0f8a07de8f950b4122db4e6599dcf1d6e3cb1a

module.exports = router;