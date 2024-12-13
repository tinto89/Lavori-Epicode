import { Schema, model } from "mongoose";

const authorSchema = new Schema({
  nome: String,
  cognome: String,
  email: String,
  dataDiNascita: String,
  avatar: String,
});

export default model("Author", authorSchema);
