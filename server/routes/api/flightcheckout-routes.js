const router = require('express').Router();
const {
  getFlightsbyId,
  bookFlight,
  deleteFlight
} = require('../../controllers/flightcheckout-controller');

router.route('/flights/').put(bookFlight);
router.route('/flights/:flightid').get(getFlightsbyId);
router.route('/flights/:flightid').delete(deleteFlight);

module.exports = router;