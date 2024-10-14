const express = require('express');
const router = express.Router();
const Doctors = require('../models/Doctors');

// Create an Doctor
router.post('/', async (req, res) => {

   const { firstname,
      lastname,
      title,
      Specialization,
      specialty,
      service,
   } = req.body;

   try {
      const newDoctor = new Doctors({
         firstname,
         lastname,
         title,
         Specialization,
         specialty,
         service,
      });

      const doctor = await newDoctor.save();
      res.status(201).json(doctor);
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
});

// Get all Doctors
router.get('/', async (req, res) => {
   try {
      const Doctors = await Doctors.find();
      res.json(Doctors);
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
});

module.exports = router;
