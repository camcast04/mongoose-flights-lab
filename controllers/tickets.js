const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

exports.new = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) {
      res.status(404).send('Flight not found');
    } else {
      res.render('tickets/new', { flight });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error accessing flight details');
  }
};

exports.create = async (req, res) => {
  try {
    req.body.flight = req.params.id; // Assign flight ID to the ticket
    const ticket = await Ticket.create(req.body);
    res.redirect(`/flights/${req.params.id}`);
  } catch (error) {
    console.error(error);
    // Redirect to a new ticket creation page with error message or render the page with errors
    // Assuming `tickets/new.ejs` can handle an error object and display error messages
    res.status(400).render('tickets/new', {
      error: error.message,
      flight: await Flight.findById(req.params.id),
    });
  }
};
