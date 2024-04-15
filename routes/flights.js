const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// GET /flights
router.get('/', flightsCtrl.index);

// GET /flights/new
router.get('/new', flightsCtrl.new);

// POST /flights
router.post('/', flightsCtrl.create);

router.post('/:id', flightsCtrl.show);

//adds destination

router.post('/:id/destinations', flightsCtrl.addDestination);

module.exports = router;
