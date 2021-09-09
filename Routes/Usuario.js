const express = require("express");
const router = express.Router();
const userController = require("./../Controllers/userController");
// validaremos usando express-validator
const { check } = require("express-validator");
const User = require("../Models/User");

//api/usuarios
router.post(
  "/",
  [
    check("nombre", "El Nombre es obligatorio").not().isEmpty(),
    check("email", "Agregar un email valido").isEmail(),
    check("pass", "El password debe contener minimo 6 caracteres").isLength({
      min: 6,
    }),
  ],
  userController.crearUsuario
);

router.get("/", (req, res) => {
  User.find({}, (err, user) => {
    if (err) {
      res.status(500).send({ error: "Could not fetch users" });
    } else {
      res.send(user);
    }
  });
});

module.exports = router;
