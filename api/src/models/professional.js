import mongoose from "mongoose";
import { HospitalSchema } from "./hospital";

export const professionalSchema = new mongoose.Schema({
  Name: {
    // type from database
    type: String,
    required: true,
    unique: true,
  },
  Specilaisation: {
    type: String,
    required: true,
  },
  Hospital: {},
});

export default mongoose.model <
  professionalDocument >
  ("Professional", professionalSchema);
