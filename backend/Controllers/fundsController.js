const Funds = require("../model/Funds.js");

// GET /api/funds/:userId
const getFunds = async (req, res) => {
  const { userId } = req.params;

  try {
    const funds = await Funds.findOne({ userId });

    if (!funds) {
      return res.status(404).json({ message: "Funds not found" });
    }

    res.status(200).json(funds);
  } catch (error) {
    res.status(500).json({ error: "Server error while fetching funds" });
  }
};

// POST /api/funds/add
const addFunds = async (req, res) => {
  const { userId, amount } = req.body;

  try {
    let funds = await Funds.findOne({ userId });

    if (!funds) {
      funds = new Funds({
        userId,
        availableMargin: amount,
        availableCash: amount,
        openingBalance: amount,
        usedMargin: 0,
      });
    } else {
      funds.availableCash += amount;
      funds.availableMargin += amount;
      funds.openingBalance += amount;
    }

    await funds.save();
    res.status(200).json(funds);
  } catch (error) {
    res.status(500).json({ error: "Server error while adding funds" });
  }
};

// POST /api/funds/buy
const buyStock = async (req, res) => {
  const { userId, amount } = req.body;
  console.log("🟡 [BUY] Incoming =>", { userId, amount });

  try {
    const funds = await Funds.findOne({ userId });

    if (!funds) {
      console.log("🔴 Funds not found for user:", userId);
      return res.status(404).json({ message: "Funds not found" });
    }

    console.log("💰 Before purchase: ", {
      availableCash: funds.availableCash,
      availableMargin: funds.availableMargin,
      usedMargin: funds.usedMargin,
    });

    if (funds.availableCash < amount) {
      console.log("❌ Insufficient funds");
      return res.status(400).json({ message: "Insufficient funds" });
    }

    funds.availableCash -= amount;
    funds.availableMargin -= amount;
    funds.usedMargin += amount;

    await funds.save();

    console.log("✅ After purchase:", {
      availableCash: funds.availableCash,
      availableMargin: funds.availableMargin,
      usedMargin: funds.usedMargin,
    });

    res.status(200).json(funds);
  } catch (error) {
    console.error("❌ Error in buyStock:", error);
    res.status(500).json({ error: "Server error while buying stock" });
  }
};

// Export functions in CommonJS format
module.exports = {
  getFunds,
  addFunds,
  buyStock,
};

