const Doctors = require('../models/Doctors')

module.exports = {
   get,
   createMany,
   create,
   update,
   remove
}

async function get(req, res, next) {
   try {
      const Doctors = await Doctors.find();
      res.json(Doctors);
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
}

async function createMany(req, res, next) {
   const { data } = req.body;

   Doctors.insertMany(data)
      .then((d) => {
         console.log('Doctors inserted successfully');
         res.json(d);
      })
      .catch((error) => {
         console.error('Error inserting Doctors data: ', error);
         res.status(500).json({ message: 'Error inserting Doctors data' });
      });
}

async function create(req, res, next) {
   const data = req.body;
   try {
      const Data = new Doctors(data);
      await Data.save();
      res.status(201).json(Data);
   } catch (err) {
      res.status(400).json({ message: err.message });
   }
}

async function update(req, res, next) {
   const { id } = req.params;
   const data = req.body;
   try {
      const Data = await Doctors.findByIdAndUpdate(id, data, { new: true });
      if (!Data) return res.status(404).json({ message: 'Doctors not found' });
      res.json(Data);
   } catch (err) {
      res.status(400).json({ message: err.message });
   }
}

async function remove(req, res, next) {
   const { id } = req.params;
   try {
      const Data = await Doctors.findByIdAndDelete(id);
      if (!Data) return res.status(404).json({ message: 'Doctors not found' });
      res.json({ message: 'Doctors deleted successfully' });
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
}
