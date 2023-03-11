const router = require('express').Router();
const {
  getAllFlightouts,
  findFlightout,
} = require('../../controllers/flightout-controller');

router.route('/').post(findFlightout);
router.route('/').get(getAllFlightouts);

module.exports = router;