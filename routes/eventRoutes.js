import express from "express";
const router = express.Router();

router.post("/",createEvent);

module.exports = router;