// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: String,
  name: String,
  role: { type: String, enum: ['patient', 'doctor', 'admin'] },
  email: String,
  password: String,
  phone: String,
});

module.exports = mongoose.model('User', userSchema);
