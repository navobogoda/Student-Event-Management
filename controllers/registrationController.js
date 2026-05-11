const Registration = require("../models/Registration");

exports.registerEvent = async (req, res) => {
  const reg = await Registration.create(req.body);
  res.json(reg);
};

exports.getRegistrations = async (req, res) => {
  const regs = await Registration.find();
  res.json(regs);
};

exports.deleteRegistration = async (req, res) => {
  await Registration.findByIdAndDelete(req.params.id);
  res.json({ message: "Cancelled" });
};