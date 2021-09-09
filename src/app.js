const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const db = mongoose.connect(process.env.CONNECTION_STRING);

app.use(express.json());

app.use("/api/usuarios", require(".././Routes/Usuario"));

app.get("/", (req, res) => {
  res.send("Main entry");
});

app.listen(3000, () => {
  console.log("Escuchando en el puerto 3000");
});
