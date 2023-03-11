const router = require('express').Router();
const {
  getAllFlightouts,
  createFlightout,
} = require('../../controllers/flightout-controller');

router.route('/').post(createFlightout);
router.route('/').get(getAllFlightouts);

module.exports = router;