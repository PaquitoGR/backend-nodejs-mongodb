"use strict";

const { request } = require("express");

// cargar la librería de express
const express = require("express");

// crear la aplicación
const app = express();

// añadir una ruta
app.get("/", (request, response, next) => {
  response.send("hola");
});

app.get("/facturas", (request, response, next) => {
  response.send({ result: [1, 2, 3] });
});

// arrancamos el servidor
app.listen(3001, () => {
  console.log("Servidor HTTP arrancado en http://localhost:3001");
});
