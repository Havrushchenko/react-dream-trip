const router = require('express').Router();
const userRoutes = require('./user-routes');
const flightoutRoutes = require('./flightout-routes');
const flightCheckoutRoutes = require('./flightcheckout-routes');
const passengerRoutes = require('./passenger-routes');

router.use('/users', userRoutes);
router.use('/flightouts', flightoutRoutes);
router.user('/users/flights', flightCheckoutRoutes);
router.user('/users/flights/passengers', passengerRoutes);

module.exports = router;