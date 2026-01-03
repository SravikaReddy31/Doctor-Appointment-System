// routes/notifications.js
const express = require('express');
const router = express.Router();
const Notification = require('../models/notification'); // Create notification model as needed

// Send notification
router.post('/send', async (req, res) => {
  const notification = new Notification(req.body);
  await notification.save();
  res.status(201).send(notification);
});

// Get user notifications
router.get('/user/:userId', async (req, res) => {
  const notifications = await Notification.find({ userId: req.params.userId });
  res.send(notifications);
});

// Mark notification as read
router.put('/:id/read', async (req, res) => {
  const updated = await Notification.findByIdAndUpdate(req.params.id, { read: true }, { new: true });
  res.send(updated);
});

module.exports = router;
