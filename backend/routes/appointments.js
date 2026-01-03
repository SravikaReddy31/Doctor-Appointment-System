// routes/appointments.js
const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment');

// Book appointment
// Book appointment route in routes/appointments.js
router.post('/book', async (req, res) => {
  const { doctorId, patientId, slotId, reason } = req.body;
  const appointment = new Appointment({
    doctorId,
    patientId,
    slotId,
    reason,
    status: "Booked",          // add this line
    consultationNotes: ""      // and this line
  });
  await appointment.save();
  res.status(201).send(appointment);
});


// Get patient appointments
router.get('/patient/:patientId', async (req, res) => {
  const appointments = await Appointment.find({ patientId: req.params.patientId });
  res.send(appointments);
});

// Get doctor appointments
router.get('/doctor/:doctorId', async (req, res) => {
  const appointments = await Appointment.find({ doctorId: req.params.doctorId });
  res.send(appointments);
});

// Confirm appointment
router.put('/:id/confirm', async (req, res) => {
  const updated = await Appointment.findByIdAndUpdate(req.params.id, { status: 'Confirmed' }, { new: true });
  res.send(updated);
});

// Cancel appointment
router.put('/:id/cancel', async (req, res) => {
  const updated = await Appointment.findByIdAndUpdate(req.params.id, { status: 'Cancelled' }, { new: true });
  res.send(updated);
});

// Reschedule appointment
router.put('/:id/reschedule', async (req, res) => {
  const updated = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updated);
});

// Add consultation notes
  router.put('/:id/notes', async (req, res) => {
  const updated = await Appointment.findByIdAndUpdate(req.params.id,
    { consultationNotes: req.body.consultationNotes },
    { new: true });
    res.send(updated);
  });


// Export appointment list (by doctor and date)
router.get('/export', async (req, res) => {
  const { doctorId, date } = req.query;
  const appointments = await Appointment.find({ doctorId, bookingDate: date });
  res.send(appointments);
});

module.exports = router;
