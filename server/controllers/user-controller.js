const { User } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
  async getAllUsers(req, res) {
    User.find({})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  },
  
  async createUser({ body }, res) {
    const user = await User.create(body);
    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
};