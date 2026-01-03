// routes/doctors.js
const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor');

// Register doctor
router.post('/register', async (req, res) => {
  const doctor = new Doctor(req.body);
  await doctor.save();
  res.status(201).send(doctor);
});

// Get doctor by ID
router.get('/:doctorId', async (req, res) => {
  const doctor = await Doctor.findOne({ doctorId: req.params.doctorId });
  res.send(doctor);
});

// Get all doctors
router.get('/', async (req, res) => {
  const doctors = await Doctor.find();
  res.send(doctors);
});

module.exports = router;
