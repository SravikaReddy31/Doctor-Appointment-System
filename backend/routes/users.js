const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Registration endpoint
router.post('/register', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).send(user);
});

// Login endpoint
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(401).send({ message: 'Invalid credentials' });
  }
  res.send({
    userId: user.userId,
    name: user.name,
    role: user.role,
    email: user.email,
  });
});

// Get all doctors (for frontend doctor list)
router.get('/doctors', async (req, res) => {
  const doctors = await User.find({ role: 'doctor' });
  res.send(doctors);
});

module.exports = router;
