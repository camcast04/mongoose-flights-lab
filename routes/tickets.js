const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// Route to show form for new ticket
router.get('/flights/:id/tickets/new', ticketsCtrl.new);

// Route to create a ticket
router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;
