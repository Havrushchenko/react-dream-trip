const { FlightCheckout, Passenger } = require('../models');

module.exports = {
  // GET a single flight -> GET /api/flights/:id
  async getFlightsbyId({params}, res) {
    FlightCheckout.findOne({_id: params.id })
    .then(dbFlightCheckoutData => {
        if (!dbFlightCheckoutData) {
            res.status(404).json({ message: 'No flight found with this Id' });
            return;
            }
        res.json(dbFlightCheckoutData);
        })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
        });
    },
  // CREATE a single flight -> PUT /api/flights/:id
  async bookFlight(req, res) {
    console.log("test")
    FlightCheckout.create( req.body, {new: true, runValidators: true})
    .then(dbFlightCheckoutData => {
        console.log("bookflight")
        if (!dbFlightCheckoutData) {
            res.status(404).json({ message: 'No flight found with this Id' });
            return;
            }
        res.json(dbFlightCheckoutData);
        })
    .catch(err => res.json(err)); 
    },
  // DELETE a flight by ID -> DELETE /api/flights/:id
  async deleteFlight({params}, res) {
    FlightCheckout.findOneAndDelete({_id: params.id})
    .then(dbFlightCheckoutData => {
        if (!dbFlightCheckoutData) {
            res.status(404).json({ message: 'No flight found with this Id' });
            return;
            }
        // delete the passenger data
        Passenger.deleteMany({ flight_id: dbFlightCheckoutData.id })
        .then(() => {
            res.json({message: 'Successfully deleted the flight'});
            })
        .catch(err => res.status(500).json(err));
        })
    .catch(err => res.json(err)); 
    },
  }
