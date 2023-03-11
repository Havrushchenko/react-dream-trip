const { Flightout } = require('../models');

module.exports = {
  async getAllFlightouts(req, res) {
    Flightout.find({})
    .then(dbFlightoutData => res.json(dbFlightoutData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  },
  
  async createFlightout({ body }, res) {
    Flightout.create(body)
    .then(dbFlightoutData => res.json(dbFlightoutData))
    .catch(err => res.status(400).json(err));
  },
};