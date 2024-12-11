import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connessione a MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Route API esempio
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Avvio del server
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
