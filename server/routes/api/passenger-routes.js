const router = require('express').Router();
const {
  addPassenger,
  updatePassenger,
  deletePassenger
} = require('../../controllers/passenger-controller');

router.route('/:userid/flights/:flightid/').post(addPassenger)
router.route('/:userid/flights/:flightid/:passengerid').put(updatePassenger)
router.route('/:userid/flights/:flightid/:passengerid').delete(deletePassenger)

module.exports = router;