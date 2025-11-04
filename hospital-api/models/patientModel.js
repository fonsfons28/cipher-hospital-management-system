import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  diagnosis: String,
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

export default mongoose.model("Patient", patientSchema);
