const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/registrationController");

router.post("/", ctrl.registerEvent);
router.get("/", ctrl.getRegistrations);
router.delete("/:id", ctrl.deleteRegistration);


module.exports = router;