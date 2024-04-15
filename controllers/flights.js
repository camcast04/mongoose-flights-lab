const Flight = require('../models/flight');
const Ticket = require('../models/ticket'); // Make sure to require the Ticket model

exports.show = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({ flight: flight._id });
    res.render('flights/show', { flight, tickets });
  } catch (error) {
    console.error(error);
    res.redirect('/');
  }
};

exports.index = async (req, res) => {
  try {
    const flights = await Flight.find({});
    res.render('flights/index', { flights });
  } catch (error) {
    console.error(error);
    res.redirect('/');
  }
};

exports.new = (req, res) => {
  res.render('flights/new');
};

exports.create = async (req, res) => {
  try {
    const newFlight = new Flight(req.body);
    await newFlight.save();
    res.redirect('/flights');
  } catch (error) {
    console.log(error);
    res.render('flights/new', { errors: error.errors });
  }
};

exports.addDestination = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    flight.destinations.push(req.body);
    await flight.save();
    res.redirect(`/flights/${req.params.id}`);
  } catch (error) {
    console.error(error);
    res.redirect('/flights');
  }
};
