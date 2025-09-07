import mongoose, { Schema } from "mongoose";
const VenderSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  otp: {
    type: String,
    require: true,
  },
  step: {
    type: Number,
    require: true,
    default: 0,
  },
});
export const Token = mongoose.model("venders", VenderSchema);
