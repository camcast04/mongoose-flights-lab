const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports.index = (req, res) => {
  Flight.find({}, function (err, flights) {
    res.render('flights/index', { title: 'All Flights', flights });
  });
};

module.exports.newFlight = (req, res) => {
  res.render('flights/new', { title: 'Add New Flight' });
};

module.exports.create = (req, res) => {
  const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) return res.render('flights/new');
    console.log(flight);
    res.redirect('/flights');
  });
};
