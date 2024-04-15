const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema(
  {
    seat: {
      type: String,
      required: true,
      match: /[A-F][1-9]\d?/, // a1, b9, c10 etc.
    },
    price: {
      type: Number,
      min: 0, //tickets cannot have a - price
    },
    flight: {
      type: Schema.Types.ObjectId,
      ref: 'Flight',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Ticket', ticketSchema);
