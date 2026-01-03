// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/appointments');


app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/users', require('./routes/users'));
app.use('/api/doctors', require('./routes/doctors'));
app.use('/api/notifications', require('./routes/notifications'));

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
