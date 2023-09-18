"use strict";

// crear una función para usarla como constructor de objetos
function Fruta(nombre) {
  this.nombre = nombre;
  this.saluda = function () {
    console.log("Hola soy", this.nombre);
  };
}

const limon = new Fruta("limon");

// limon.saluda();

//setTimeout(limon.saluda.bind(limon), 2000);

//const saludoDeLimon = limon.saluda.bind(limon);
//aludoDeLimon();

const saludoDeLimon = limon.saluda;

// CALL y APPLY

// saludoDeLimon.call(limon, "arg1", "arg2", "arg3", "arg4"); // se pasan varios argumentos separados por Comas
// saludoDeLimon.apply(limon, args[("arg1", "arg2", "arg3", "arg4")]); // se pasan varios argumentos dentro de un array

// JS busca el punto a la izquierda de los paréntesis de ejecución
// y lo que haya a la izquierda de ese punto, lo usa como this
