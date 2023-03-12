const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const flightCheckoutSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    default: ()=> new Types.ObjectId()
    },
  passenger_id: {
    type: String,
    required: true,
    ref: 'Passenger'
    },
  departureAirport: {
    type: String,
    required: true,
    },
  departureDate: {
    type: DateTime,
    required: true,
    },
  arrivalAirport: {
    type: String,
    required: true,
    },
  arrivalDate: {
    type: DateTime,
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

const FlightCheckout = mongoose.model('FlightCheckout', flightCheckoutSchema);

module.exports = FlightCheckout;
