require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./Routes/authRoutes");
const ordersRoutes = require("./Routes/orders"); 
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionModel");
const fundsRoutes = require("./Routes/funds.js");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "https://finvoke-1.onrender.com",
      "https://finvoke-2.onrender.com",
    ],
    credentials: true,
  })
);


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/orders", ordersRoutes);
app.use('/api/funds', fundsRoutes); 

// Public holdings
app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

// Public positions
app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});


// Connect to DB and start server
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("DB connected");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error("DB connection failed:", err));
