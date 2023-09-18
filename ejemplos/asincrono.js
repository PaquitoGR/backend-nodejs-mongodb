"use stict";

function escribeTrasDosSegundos(texto, callBack) {
  setTimeout(function () {
    console.log(texto);
    callBack();
  }, 500);
}

function serie(n, fn, callBack) {
  if (n == 0) {
    callBack();
    return;
  }
  n = n - 1;
  fn("texto" + n, function () {
    serie(n, fn, callBack);
  });
}

serie(6, escribeTrasDosSegundos, function () {
  console.log("fin");
});
