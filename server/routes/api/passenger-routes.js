const router = require('express').Router();
const {
    addPassenger,
    updatePassenger,
    deletePassenger
  } = require('../../controllers/passenger-routes');
  
// api/user/flights/flightid/passenger
  router.route('/:userid/flights/:flightid/').post(addPassenger).
  router.route('/:userid/flights/:flightid/:passengerid').put(updatePassenger).delete(deletePassenger)

  module.exports = router;