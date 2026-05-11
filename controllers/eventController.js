import Event from "../models/eventModel.js";


export const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);

    res.json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};