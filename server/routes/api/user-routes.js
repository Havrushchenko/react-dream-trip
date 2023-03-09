const router = require('express').Router();
const {
  createUser,
  login,
  getAllUsers
} = require('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth');

router.route('/auth/signup').post(createUser).put(authMiddleware);
router.route('/auth/login').post(login);
router.route('/').get(getAllUsers).post(createUser)

module.exports = router;

