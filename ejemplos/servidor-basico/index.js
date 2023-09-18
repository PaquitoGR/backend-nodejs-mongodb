// cargar la librería http
const http = require("http");
const Chance = require("chance");

const chance = new Chance();

// definir un servidor
const servidor = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-type": "text/html" });

  response.end(`Wake up, <b>${chance.color()}</b>`);
});

// arrancamos el servidor
servidor.listen(3000, "127.0.0.1");

console.log("Sevidor arrancado en http://127.0.0.0:3000");
