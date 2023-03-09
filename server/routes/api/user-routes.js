const router = require('express').Router();
const {
  createUser,
  getAllUsers
} = require('../../controllers/user-controller');

router.route('/auth/signup').post(createUser);
router.route('/').get(getAllUsers);

module.exports = router;

