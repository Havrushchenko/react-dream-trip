const router = require('express').Router();
const {
  createUser,
  login,
  getAllUsers
} = require('../../controllers/user-controller');

router.route('/auth/signup').post(createUser);
router.route('/auth/login').post(login);
router.route('/').get(getAllUsers);

module.exports = router;

