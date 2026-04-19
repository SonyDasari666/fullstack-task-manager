const express = require("express");
console.log("Auth routes loaded ✅");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Signup API
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    await user.save();

    res.json({ message: "User registered successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const jwt = require("jsonwebtoken");

// Login API
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const authMiddleware = require("../middleware/authMiddleware");

// Protected route
router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to dashboard 🎉",
    user: req.user
  });
});

// 👇 ADD THIS HERE
router.get("/test", (req, res) => {
  res.send("Auth route working");
});

module.exports = router;