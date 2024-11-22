const express = require('express');
const CodeSubmission = require('../models/CodeSubmission');

const router = express.Router();

// Submit code
router.post('/submit', async (req, res) => {
  const { userId, code, language } = req.body;
  
  const newCodeSubmission = new CodeSubmission({ userId, code, language });

  try {
    await newCodeSubmission.save();
    res.status(201).json(newCodeSubmission);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all code submissions for a user
router.get('/:userId', async (req, res) => {
  try {
    const submissions = await CodeSubmission.find({ userId: req.params.userId });
    res.json(submissions);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
