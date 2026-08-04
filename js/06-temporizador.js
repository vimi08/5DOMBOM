//Realizar una web con un temporizador donde
// el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el contador. 
//Debe contener los botones, iniciar, pausar y reset. 


let segundosTotales = 0;
let intervalo = null;

const btnIniciar = document.getElementById("btnIniciar");
const btnPausar = document.getElementById("btnPausar");
const btnReset = document.getElementById("btnReset");
const card = document.getElementById("card");
const botonesPreset = document.querySelectorAll(".btn-preset");

function actualizarTemporizador() {
  const horas = String(Math.floor(segundosTotales / 3600)).padStart(2, "0");
  const minutos = String(Math.floor((segundosTotales % 3600) / 60)).padStart(2, "0");
  const segundos = String(segundosTotales % 60).padStart(2, "0");

  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}

function temporizador() {
  if (segundosTotales <= 0) {
    clearInterval(intervalo);
    intervalo = null;
    alert("⌛Tiempo terminado!");
    btnIniciar.disabled = false; 
    btnPausar.disabled = true;
    btnReset.disabled = false;
    card.classList.remove("border-success", "border-warning");
    card.classList.add("border-danger");
    return;
  }
  segundosTotales--;
  actualizarTemporizador();
}

btnIniciar.addEventListener("click", () => {
  if (intervalo === null) {
    if (segundosTotales <= 0) {
      alert("⚠️ Ingresa un tiempo válido mayor a 0 usando los botones");
      return;
    }

    intervalo = setInterval(temporizador, 1000);
    btnIniciar.disabled = true;   
    btnPausar.disabled = false;
    btnReset.disabled = false;
    card.classList.remove("border-danger", "border-warning");
    card.classList.add("border-5", "border-success");
  }
});

btnPausar.addEventListener("click", () => {
  if (intervalo !== null) {
    clearInterval(intervalo);
    intervalo = null;
    btnIniciar.disabled = false;  
    btnPausar.disabled = true;
    card.classList.remove("border-success");
    card.classList.add("border-warning");
  }
});

btnReset.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
  segundosTotales = 0;
  actualizarTemporizador();

  btnIniciar.disabled = false; 
  btnPausar.disabled = true;
  btnReset.disabled = true;
  card.classList.remove("border-5", "border-warning", "border-success", "border-danger");
});

//acumular el tiempo en los btn
botonesPreset.forEach((boton) => {
  boton.addEventListener("click", () => {
    const segundos = parseInt(boton.dataset.segundos);
    if (!isNaN(segundos) && segundos > 0) {
      segundosTotales += segundos;
      actualizarTemporizador();
      btnIniciar.disabled = false; 
      btnReset.disabled = false;   
    }
  });
});
actualizarTemporizador();
