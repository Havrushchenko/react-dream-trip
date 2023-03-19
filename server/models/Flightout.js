const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const flightoutSchema = new Schema({
  airline: {
    type: String,
    required: true,
  },
  flight_number: {
    type: String,
    required: true,
  },
  departure_city: {
    type: String,
    required: true,
  },
  destination_city: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    get: (timestamp) => dateFormat(timestamp),
  },
  departure_airport: {
    type: String,
    required: true,
  },
  destination_airport: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Flightout = model("Flightout", flightoutSchema);

module.exports = Flightout;
