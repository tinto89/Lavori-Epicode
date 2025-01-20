import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { authorRoute } from "./routes/authorRoute.js";
// Creazione del server
const server = express();
server.use(cors());
server.use(express.json());
server.use("/api/authors", authorRoute);
// Connessione a MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/striveBlogDB")
  .then(() => console.log("MongoDB database connected"))
  .catch((err) => console.log("MongoDB connection error:", err));
// Avvio del server
server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
