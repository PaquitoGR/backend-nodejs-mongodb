"use stict";

function escribeTrasDosSegundos(texto, callBack) {
  setTimeout(function () {
    console.log(texto);
    callBack();
  }, 500);
}

function serie(arr, fn, callBack) {
  if (arr.length == 0) {
    callBack();
    return;
  }

  fn("texto" + arr.shift(), function () {
    serie(arr, fn, callBack);
  });
}

serie([1, 2, 3, "cuatro", 5], escribeTrasDosSegundos, function () {
  console.log("fin.");
});
