const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuario = Schema({
  nombre: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  pass: { type: String, require: true },
  registro: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("User", usuario);
