const router = require('express').Router();
const {
    getFlightsbyId,
    updateFlight,
    deleteFlight
  } = require('../../controllers/flightcheckout-routes');
  
// api/user/flightcheckout/id
  router.route('/:userid/flights/').get(getFlightsbyId);
  router.route('/:userid/flights/:flightid').post(updateFlight).delete(deleteFlight);
  
  module.exports = router;