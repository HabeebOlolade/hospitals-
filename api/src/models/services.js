import mongoose from "mongoose";

export const ServicesSchema = new mongoose.Schema({
  Name: {
    // type from database
    type: String,
    required: true,
    unique: true,
  },
  Address: {
    type: String,
    required: true,
  },
  State: {
    type: String,
    required: true,
  },
});

export default mongoose.model < ServicesDocument > ("Services", ServicesSchema);
