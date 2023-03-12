const router = require('express').Router();
const {
  getAllFlightouts,
  createFlightout,
  findFlightout,
  deleteFlightout
} = require('../../controllers/flightout-controller');

router.route('/').post(createFlightout);
router.route('/search').post(findFlightout);
router.route('/').get(getAllFlightouts);
router.route('/:id').delete(deleteFlightout);

module.exports = router;