var express = require("express");
var router = express.Router();
const { query, validationResult } = require("express-validator");

/* GET users listing. */
router.get(
  "/",
  [
    //validaciones
    query("age").isNumeric().withMessage("Debe tener valor numérico"),
    query("name")
      .custom((valor) => {
        return valor === "rojo";
      })
      .withMessage("Debe ser rojo"),
  ],
  function (req, res, next) {
    validationResult(req).throw();

    const usuarios = [
      { nombre: "Smith", edad: 36 },
      { nombre: "Brown", edad: 44 },
      { nombre: "rojo", edad: 22 },
    ];

    const filtroName = req.query.name;

    if (filtroName) {
      res.json(usuarios.filter((usuario) => usuario.nombre === filtroName));
    } else {
      res.json(usuario);
    }
    //res.send('respond with a resource');
  }
);

// POST /users (body)
router.post("/", (req, res, next) => {
  console.log(req.body);
  res.send("recibido");
});

module.exports = router;
