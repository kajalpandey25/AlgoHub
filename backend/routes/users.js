const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Create a new user
router.post('/add', async (req, res) => {
  const { username, email } = req.body;
  const newUser = new User({ username, email });
  
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all users (Leaderboard)
router.get('/', async (req, res) => {
  try {
    const users = await User.find().sort({ score: -1 });
    res.json(users);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update user score
router.patch('/:id', async (req, res) => {
  const { score } = req.body;
  
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.score = score;
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a user
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User deleted successfully", user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
