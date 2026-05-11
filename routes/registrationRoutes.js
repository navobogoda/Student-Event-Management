import express from "express";

import {
  registerEvent,
  getRegistrations,
  deleteRegistration
} from "../controllers/registrationController.js";

const router = express.Router();

router.post("/", registerEvent);
router.get("/", getRegistrations);
router.delete("/:id", deleteRegistration);

export default router;