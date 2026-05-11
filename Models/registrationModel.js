import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  userId: String,
  eventId: String,
  status: {
    type: String,
    default: "registered"
  }
});

const Registration = mongoose.model("Registration", registrationSchema);

export default Registration;