const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/doctors', require('./routes/doctors'));
app.use('/api/auth', require('./routes/auth'))


// Start the server
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
   .then(() =>
      app.listen(PORT, () => {
         console.log('listening on port', PORT)
      })
   ).catch((err) => console.log(err))




