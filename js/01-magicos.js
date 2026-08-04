/*Crea una web con bootstrap y js, 
que contenga un botón comenzar el juego,
en ese momento se crea un número aleatorio que el usuario deberá adivinar, 
la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar,
al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico,
si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.*/

let numeroMagico;
let intentos = 0;
const maxIntentos = 2;

const btnComenzar = document.getElementById("btnComenzar");
const juego = document.getElementById("juego");
const inputNumero = document.getElementById("inputNumero");
const btnEnviar = document.getElementById("btnEnviar");
const resultado = document.getElementById("resultado");

// inicia
btnComenzar.addEventListener("click", () => {
  numeroMagico = Math.floor(Math.random() * 10) + 1;
  intentos = 0;
  juego.classList.remove("d-none");
  btnEnviar.disabled = false;
  resultado.innerHTML = "";
  alert(
    "El juego comenzó! Solo tienes 2 intentos para adivinar un número del 1 al 10.",
  );
  console.log("Número secreto:", numeroMagico);
});

btnEnviar.addEventListener("click", () => {
  const valor = parseInt(inputNumero.value);
  intentos++;

  if (valor === numeroMagico) {
    alert(
      `🎉Felicitaciones! El número era ${numeroMagico}. Lo conseguiste en ${intentos} intento(s).`,
    );

    resultado.innerHTML = `<div class="alert alert-success">🎉Felicitaciones! El número era ${numeroMagico}. Lo lograste en ${intentos} intento(s).</div>`;
    btnEnviar.disabled = true;
  } else if (intentos >= maxIntentos) {
    alert(`❌ No tienes más intentos. El número secreto era ${numeroMagico}.`);

    resultado.innerHTML = `<div class="alert alert-danger">❌ No tienes más intentos. El número secreto era ${numeroMagico}.</div>`;
    btnEnviar.disabled = true;
  } else if (valor < numeroMagico) {
    alert("El número mágico es más grande ⬆️");

    resultado.innerHTML = `<div class="alert alert-warning">El número mágico es más grande ⬆️</div>`;
  } else {
    alert("El número mágico es más pequeño ⬇️");

    resultado.innerHTML = `<div class="alert alert-warning">El número mágico es más pequeño ⬇️</div>`;
  }
});

