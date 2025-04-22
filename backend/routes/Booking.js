const express = require('express');
const router = express.Router();

// Import the Booking model (we'll create this next)
const Booking = require('../models/Booking');

// POST route to create a new booking
router.post('/bookings', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
