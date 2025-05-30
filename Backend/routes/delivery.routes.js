const express = require('express');
const router = express.Router();
const Delivery = require('../models/delivery.model');

// POST route to save delivery details
router.post('/', async (req, res) => {
  try {
    const newDelivery = new Delivery(req.body);
    await newDelivery.save();
    res.status(201).json({ message: 'Delivery details saved!', newDelivery });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
