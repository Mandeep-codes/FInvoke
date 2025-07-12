const Author = require("../model/Author");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const createToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existing = await Author.findOne({ email });
    if (existing) return res.status(400).json({ msg: "Email already exists" });

    const user = await Author.create({ username, email, password });
    const token = createToken(user._id);

   res.cookie("token", token, {
  httpOnly: true,
  secure: true, 
  sameSite: "None",
  maxAge: 3 * 24 * 60 * 60 * 1000,
});


    res.status(201).json({ user: user._id });
  } catch (err) {
    res.status(500).json({ msg: "Registration failed" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Author.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = createToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
  secure: true, 
  sameSite: "None",
  maxAge: 3 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ user: user._id });
  } catch (err) {
    res.status(500).json({ msg: "Login failed" });
  }
};
