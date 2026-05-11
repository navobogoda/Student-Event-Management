import Registration from "../models/registrationModel.js";

export const registerEvent = async (req, res) => {
  try {
    const reg = await Registration.create(req.body);
    res.json(reg);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRegistrations = async (req, res) => {
  try {
    const regs = await Registration.find();
    res.json(regs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteRegistration = async (req, res) => {
  try {
    await Registration.findByIdAndDelete(req.params.id);

    res.json({
      message: "Cancelled"
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};