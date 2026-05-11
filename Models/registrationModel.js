import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  eventId: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "registered"
  }
});

const Registration = mongoose.model("Registration", registrationSchema);

export default Registration;