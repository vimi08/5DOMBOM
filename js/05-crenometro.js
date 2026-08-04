let segundosTotales = 0;
let intervalo = null;

const btnIniciar = document.getElementById("btnIniciar");
const btnPausar = document.getElementById("btnPausar");
const btnReset = document.getElementById("btnReset");
const card = document.getElementById("card");

function actualizarCronometro() {
  const horas = String(Math.floor(segundosTotales / 3600)).padStart(2, "0");
  const minutos = String(Math.floor((segundosTotales % 3600) / 60)).padStart(
    2,
    "0",
  );
  const segundos = String(segundosTotales % 60).padStart(2, "0");

  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}

btnIniciar.addEventListener("click", () => {
  if (intervalo === null) {
    intervalo = setInterval(() => {
      segundosTotales++;
      actualizarCronometro();
    }, 1000);

    btnPausar.disabled = false;
    btnReset.disabled = false;
    card.classList.remove("border-warning");
    card.classList.add("border-5", "border-success");
  }
});

btnPausar.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
  card.classList.remove("border-success");
  card.classList.add("border-warning");
});

btnReset.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
  segundosTotales = 0;
  actualizarCronometro();

  btnPausar.disabled = true;
  btnReset.disabled = true;
  card.classList.remove("border-5", "border-warning", "border-success");
});
actualizarCronometro();
