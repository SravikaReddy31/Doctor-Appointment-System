const mongoose = require('mongoose');
const appointmentSchema = new mongoose.Schema({
  doctorId: String,
  patientId: String,
  slotId: String,
  reason: String,
  status: { 
    type: String, 
    enum: ["Booked", "Confirmed", "Cancelled"], // <-- must include "Booked"
    default: "Booked" 
  },
  consultationNotes: { type: String, default: ""}
});
module.exports = mongoose.model('Appointment', appointmentSchema);
