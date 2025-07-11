const express = require("express");
const jwt = require("jsonwebtoken");
const Author = require("../model/Author");
const { register, login } = require("../Controllers/authController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);


router.get("/me", async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ msg: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await Author.findById(decoded.id).select("-password");
    if (!user) return res.status(404).json({ msg: "User not found" });

    res.status(200).json({ user });
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
});

module.exports = router;

