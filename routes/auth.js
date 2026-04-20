const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// SIGNUP
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const existing = await User.findOne({ email });
  if (existing) return res.json({ message: "User already exists" });

  await User.create({ name, email, password });

  res.json({ message: "Signup successful" });
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return res.json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.json({
    token,
    message: "Login successful"
  });
});

module.exports = router;