const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const passengerSchema = new Schema({
  flight_id: {
    type: Schema.Types.ObjectId,
    ref: 'FlightCheckout'
    },
  name: {
    type: String,
    required: true,
    trim: true
    },
  lastName: {
    type: String,
    required: true,
    trim: true
    },
  age: {
    type: Number,
    required: true,
    },
  passportNation: {
    type: String,
    required: true,
    },
  passportID: {
    type: String,
    required: true,
    },
  email: {
    type: String,
    required: true,
    unique: true
    },
  phoneNumber: {
    type: String,
    required: true,
    },
  passengers: [Order.schema]
});

const Passenger = mongoose.model('Passenger', passengerSchema);

module.exports = Passenger;
