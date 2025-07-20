document.addEventListener("DOMContentLoaded", function () {
  let contador = 0;

  const menos = document.getElementById("menos");
  const mas = document.getElementById("mas");
  const valor = document.getElementById("valor");

  function actualizarContador() {
    valor.textContent = contador;

    if (contador % 10 === 0 && contador !== 0) {
      valor.style.color = "#ff4b5c";
    } else {
      valor.style.color = "#000000";
    }
  }

  menos.addEventListener("click", function () {
    if (contador > 0) {
      contador--;
      actualizarContador();
    }
  });

  mas.addEventListener("click", function () {
    contador++;
    actualizarContador();
  });

  actualizarContador();
});
