const { Schema, model } = require('mongoose');

const flightoutSchema = new Schema(
    {
        // flight_number: {
        //     type: String,
        //     required: true,
        // },
        departure_city: {
            type: String,
            required: true,
        },
        destination_city: {
            type: String,
            required: true,
        },
        departure_time: {
            type: String,
            required: true,
        },
        departure_day: {
            type: String,
            required: true,
        },
        arrival_time: {
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