const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctorModel');

// Get all doctors
router.get('/', async (req, res) => {
    const doctors = await Doctor.find();
    res.json(doctors);
});

// Add a new doctor
router.post('/', async (req, res) => {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.json({ message: "Doctor added successfully!" });
});

module.exports = router;