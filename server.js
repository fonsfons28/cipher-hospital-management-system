const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./hospital-api/config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware 
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/doctors', require('./hospital-api/routes/doctorRoutes'));
app.use('/api/patients', require('./hospital-api/routes/patientRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));