const express = require('express');
const router = express.Router();
const reservationController = require('../Controllers/ReservationController');

// Route POST : /api/reservations
router.post('/', reservationController.createReservation);

module.exports = router;