// models/slot.js
const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema({
  slotId: String,
  doctorId: String,
  date: String,
  startTime: String,
  endTime: String,
  isBooked: Boolean,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Slot', slotSchema);
