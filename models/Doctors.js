const mongoose = require('mongoose');

const Doctors = new mongoose.Schema({
   firstname: {
      type: String,
      required: true,
   },
   lastname: {
      type: String,
      required: true,
   },
   title: {
      type: String,
      enum: ['DO', 'MD'],
      required: true,
   },
   specialization: {
      type: String,
      enum: ['Primary Care Doctor', 'Internist', 'Surgeon'],
      required: true,
   },
   specialty: {
      type: String,
      enum: ['GI Oncology', 'Colorectal Surgery'],
      required: false
   },
   services: {
      type: [String],
      enum: [
         'appointments',
         'visits',
         'consultations',
         'time',
         'recommended'
       ],
      required: true,
   }
});

module.exports = mongoose.model('Doctors', Doctors);
