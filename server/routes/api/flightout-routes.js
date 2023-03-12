const router = require('express').Router();
const {
  getAllFlightouts,
  createFlightout,
  findFlightout,
} = require('../../controllers/flightout-controller');

router.route('/').post(createFlightout);
router.route('/search').post(findFlightout);
router.route('/').get(getAllFlightouts);

module.exports = router;