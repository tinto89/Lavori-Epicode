import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { authorRoute } from "./routes/authorRoute.js";
// Creazione del server
const app = express();
app.use(cors());
app.use(express.json());
app.use("api/authors", authorRoute);
// Connessione a MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/striveBlogAuthorsDB")
  .then(() => console.log("MongoDB database connected"))
  .catch((err) => console.log("MongoDB connection error:", err));
// Avvio del server
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
