

const dias = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

function actualizarReloj() {
  const ahora = new Date();
  const nombreDia = dias[ahora.getDay()];
  const numeroDia = ahora.getDate();
  const nombreMes = meses[ahora.getMonth()];
  const anio = ahora.getFullYear();
  const fechaTexto = `${nombreDia} ${numeroDia} de ${nombreMes} del ${anio}`;

  let horas = ahora.getHours();
  const minutos = String(ahora.getMinutes()).padStart(2, "0");
  const segundos = String(ahora.getSeconds()).padStart(2, "0");
  const ampm = horas >= 12 ? "PM" : "AM";
  horas = horas % 12 || 12;

  const horaTexto = `${horas} : ${minutos}`;

  document.getElementById("fecha").textContent = fechaTexto;
  document.getElementById("hora").textContent = horaTexto;
  document.getElementById("ampm").textContent = ampm;
  document.getElementById("segundos").textContent = segundos;
}
setInterval(actualizarReloj, 1000);
actualizarReloj();
