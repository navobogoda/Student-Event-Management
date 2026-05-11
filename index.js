import express from "express";
import mongoose from "mongoose";
import eventRoutes from "./routes/eventRoutes.js";
import registrationRoutes from "./routes/registrationRoutes.js";

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/eventapi")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Student Event API Running...");
});

app.use("/api/events", eventRoutes);

app.use("/api/registrations", registrationRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});