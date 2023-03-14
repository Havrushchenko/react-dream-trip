const { Schema, model } = require('mongoose');

const flightCheckoutSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    default: ()=> new Types.ObjectId()
    },
  flightout_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Flightout'
    },
  passenger_id: {
    type: String,
    required: false,
    ref: 'Passenger'
    },
  departureDate: {
    type: Date,
    required: true,
    },
  arrivalDate: {
    type: Date,
    required: true,
    },
  flightClass: {
    type: String,
    required: true,
    },
  isflightCheckout: {
    type: Boolean,
    default: false
    }
});

const FlightCheckout = model('FlightCheckout', flightCheckoutSchema);

module.exports = FlightCheckout;
