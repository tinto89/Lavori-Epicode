import { Schema, model } from "mongoose";

const authorSchema = new Schema({
  nome: {
    type: String,
  },
  cognome: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  dataDiNascita: {
    type: String,
  },
  avatar: {
    type: String,
  },
});

export default model("Author", authorSchema);
