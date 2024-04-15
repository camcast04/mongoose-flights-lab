const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the destination schema for embedded subdocument use in flights
const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], // Restrict airport codes to these values
  },
  arrival: Date, // Store the arrival date and time
});

// Define the main schema for flights
const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'], // Allowed airlines
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], // Default departure airport
    default: 'DEN',
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10, // Minimum flight number
    max: 9999, // Maximum flight number
  },
  departs: {
    type: Date,
    default: () =>
      new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    // Sets default departure date to one year from the current date
  },
  destinations: [destinationSchema], // Array of destination subdocuments
});

module.exports = mongoose.model('Flight', flightSchema); // Export the Flight model
