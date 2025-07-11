const express = require("express");
const jwt = require("jsonwebtoken");
const { OrdersModel } = require("../model/OrdersModel");

const router = express.Router();

// ✅ GET all orders of the logged-in user
router.get("/", async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ msg: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const orders = await OrdersModel.find({ user: decoded.id });
    res.status(200).json({ orders });
  } catch (err) {
    console.error(err);
    res.status(401).json({ msg: "Invalid token" });
  }
});

// ✅ POST a new order for logged-in user
router.post("/", async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ msg: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { name, qty, price, mode } = req.body;

    const newOrder = new OrdersModel({
      user: decoded.id,
      name,
      qty,
      price,
      mode,
    });

    const saved = await newOrder.save();
    res.status(201).json({ order: saved });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Order submission failed" });
  }
});

module.exports = router;
