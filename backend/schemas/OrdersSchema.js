const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrdersSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "Author", // must match your Author model
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    mode: {
      type: String,
      enum: ["BUY", "SELL"],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = { OrdersSchema };

