const express = require("express");

const { getFunds, addFunds, buyStock  } = require("../Controllers/fundsController.js");

const router = express.Router();

// GET /api/funds/:userId → Get user funds
router.get('/:userId', getFunds);

// POST /api/funds/add → Add funds
router.post('/add', addFunds);

// POST /api/funds/buy → Buy stock (deduct funds)
router.post('/buy', buyStock);

module.exports = router;
