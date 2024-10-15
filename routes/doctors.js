const express = require('express');
const router = express.Router();
const Doctors = require('../models/Doctors');


router.post('/', async (req, res) => {

   const {
      firstname,
      lastname,
      title,
      specialization,
      specialty,
      service,
   } = req.body;

   try {
      const newDoctor = new Doctors({
         firstname,
         lastname,
         title,
         specialization,
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
