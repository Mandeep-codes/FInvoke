const mongoose = require("mongoose");

const FundsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // update this if your user model is named differently
    required: true,
    unique: true,
  },
  availableMargin: {
    type: Number,
    default: 0,
  },
  usedMargin: {
    type: Number,
    default: 0,
  },
  availableCash: {
    type: Number,
    default: 0,
  },
  openingBalance: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

module.exports = mongoose.model('Funds', FundsSchema);
