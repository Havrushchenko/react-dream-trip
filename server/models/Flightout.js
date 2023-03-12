const { Schema, model } = require('mongoose');

const flightoutSchema = new Schema(
    {
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
            type: String,
            required: true,
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
            type: String,
            required: true,
        },
    }
);

const Flightout = model('Flightout', flightoutSchema);

module.exports = Flightout;