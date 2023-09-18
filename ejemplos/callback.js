"use strict";

function suma(a, b, callBack) {
  // hace algo que tarda mucho
  const lasuma = a + b;
  callBack(lasuma);
}

const resultado = suma(2, 3, function (resultado) {
  console.log(resultado);
});
