const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/registrationController");

router.post("/", ctrl.registerEvent);

module.exports = router;