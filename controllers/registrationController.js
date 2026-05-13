import Registration from "../models/registrationModel.js";

export const registerEvent = async (req, res) => {
  try {
    const registration = await Registration.create(req.body);
    res.json(registration);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteRegistration = async (req, res) => {
  try {
    await Registration.findByIdAndDelete(req.params.id);

    res.json({ message: "Registration cancelled Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};