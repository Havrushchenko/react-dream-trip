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

  async findFlightout({ body }, res) {
    const flightout = await Flightout.findOne({ $or: [{ departure_city: body.departure_city }, { destination_city: body.destination_city }] });
    if (!flightout) {
      return res.status(400).json({ message: "Can't find this flightout" });
    }
    res.json({ flightout });
  },
};