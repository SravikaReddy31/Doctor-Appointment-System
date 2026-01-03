// models/doctor.js
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  doctorId: String,
  name: String,
  specialization: String,
  qualifications: String,
  experienceYears: Number,
  clinicAddress: String,
  fees: Number,
  profileVerified: Boolean,
});

module.exports = mongoose.model('Doctor', doctorSchema);
