import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();


import eventRoutes from "./routes/eventRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import registrationRoutes from "./routes/registrationRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Student Event API Running...");
});

app.use("/api/events", eventRoutes);
app.use("/api/users", userRoutes);
app.use("/api/registrations", registrationRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
