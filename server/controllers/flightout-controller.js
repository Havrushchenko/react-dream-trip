const { Flightout, FlightCheckout, Passenger } = require('../models');

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

  async deleteFlightout({ body }, res) {
    Flightout.findOneAndDelete({ id: body._id })
      .then(dbFlightoutData => {
        if (!dbFlightoutData) {
          res.status(404).json({ message: 'No flightout found with this id!' });
          return;
        }
        // delete the flight data
        FlightCheckout.deleteMany({ flight_id: dbFlightoutData.id })
        .then(Passenger.deleteMany({ flight_id: dbFlightCheckoutData.id }))
        .then(() => {
            res.json({message: 'Successfully deleted the flight'});
            })
        .catch(err => res.status(500).json(err));
      })
      .catch(err => res.status(400).json(err));
  }
};