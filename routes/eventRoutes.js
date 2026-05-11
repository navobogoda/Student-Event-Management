import express from "express";
const router = express.Router();

router.post("/", ctrl.createEvent);
router.get("/", ctrl.getEvents);
router.put("/:id", ctrl.updateEvent);
router.delete("/:id", ctrl.deleteEvent);

module.exports = router;