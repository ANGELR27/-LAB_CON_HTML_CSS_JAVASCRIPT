let contador = 0;

const menos = document.getElementById("menos");
const mas = document.getElementById("mas");
const valor = document.getElementById("valor");

function actualizarContador() {
  valor.textContent = contador;

  if (contador >= 10) {
    valor.style.color = "#ff4b5c";
  } else {
    valor.style.color = "#ffffffff";
  }
}

menos.addEventListener("click", function () {
  contador--;
  valor.textContent = contador;
});

mas.addEventListener("click", function () {
  contador++;
  valor.textContent = contador;
});
