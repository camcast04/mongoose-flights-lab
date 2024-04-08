const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN',
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: function () {
      const today = new Date();
      const oneYearFromNow = new Date(
        today.setFullYear(today.getFullYear() + 1)
      );
      return oneYearFromNow;
    },
  },
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
