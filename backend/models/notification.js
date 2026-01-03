// models/notification.js
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  notificationId: String,
  userId: String,
  message: String,
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Notification', notificationSchema);
