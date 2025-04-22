const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Only if using DB

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Save to DB (if using MongoDB)
    const newMessage = new Contact({ name, email, subject, message });
    await newMessage.save();

    // If not saving to DB, you could log or handle it another way
    // console.log('Message received:', req.body);

    res.status(200).json({ message: 'Your message has been received!' });
  } catch (error) {
    console.error('Error in contact route:', error);
    res.status(500).json({ error: 'Something went wrong. Try again later.' });
  }
});

module.exports = router;
