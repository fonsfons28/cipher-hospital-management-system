const express = require('express');
const router = express.Router();
const Patient = require('../models/patientModel');

// Get all patients
router.get('/', async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

module.exports = router;
