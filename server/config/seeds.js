const db = require('./connection');
const { Flightout } = require('../models');

db.once('open', async () => {
  await Flightout.deleteMany();

  const flightouts = await Flightout.insertMany(
    [
      {
        airline: "Czech Airlines",
        flight_number: "88984",
        departure_city: "Belo Horizonte",
        destination_city: "Recife",
        date: "2023-11-01T04:29:52.973Z",
        departure_airport: "CNF",
        destination_airport: "REC",
        price: "84",
      },
      {
        airline: "Hong Kong Airlines",
        flight_number: "57465",
        departure_city: "Doha",
        destination_city: "Manchester",
        date: "2023-06-30T08:01:13.207Z",
        departure_airport: "DOH",
        destination_airport: "MAN",
        price: "105",
      },
      {
        airline: "Air Caraibes",
        flight_number: "33130",
        departure_city: "Los Angeles",
        destination_city: "Launceston",
        date: "2024-01-23T22:34:49.264Z",
        departure_airport: "LAX",
        destination_airport: "LST",
        price: "1015",
      },
      {
        airline: "Air Europa",
        flight_number: "UX8397",
        departure_city: "Newark",
        destination_city: "Palma de Mallorca",
        date: "2023-12-02T21:19:59.041Z",
        departure_airport: "EWR",
        destination_airport: "PMI",
        price: "115",
      },
      {
        airline: "Caribbean Airlines",
        flight_number: "31651",
        departure_city: "Seoul",
        destination_city: "Dallas",
        date: "2023-06-06T01:07:00.034Z",
        departure_airport: "ICN",
        destination_airport: "DFW",
        price: "993",
      },
      {
        airline: "Air Astana",
        flight_number: "72237",
        departure_city: "Toronto",
        destination_city: "Dublin",
        date: "2023-12-20T10:32:29.113Z",
        departure_airport: "YYZ",
        destination_airport: "DUB",
        price: "1150",
      },
      {
        airline: "Pegasus Airlines",
        flight_number: "42619",
        departure_city: "Antalya",
        destination_city: "Jakarta",
        date: "2023-08-24T11:10:13.681Z",
        departure_airport: "AYT",
        destination_airport: "CGK",
        price: "459",
      },
      {
        airline: "PCondor",
        flight_number: "97978",
        departure_city: "Copenhagen",
        destination_city: "Douala",
        date: "2024-01-28T11:01:04.901Z",
        departure_airport: "CPH",
        destination_airport: "DLA",
        price: "659",
      },
      {
        airline: "South African Airways",
        flight_number: "54578",
        departure_city: "Singapore",
        destination_city: "Buenos Aires",
        date: "2023-12-29T01:49:22.198Z",
        departure_airport: "SIN",
        destination_airport: "EZE",
        price: "1090",
      },
      {
        airline: "Swoop",
        flight_number: "81297",
        departure_city: "Cairo",
        destination_city: "Helsinki",
        date: "2023-12-14T18:03:13.375Z",
        departure_airport: "CAI",
        destination_airport: "HEL",
        price: "413",
      }
    ]);

  console.log('flightouts seeded');
  process.exit();
});
