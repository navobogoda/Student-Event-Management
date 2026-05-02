const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  userId: String,
  eventId: String,
  status: { type: String, default: "registered" }
});

module.exports = mongoose.model("Registration", registrationSchema);