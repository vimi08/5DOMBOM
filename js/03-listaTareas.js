//Crea una web con bootstrap y js, 
// que contenga un botón input donde se pueda cargar una tarea
// y un botón que al ser presionado agregue dicha tarea a una lista, 
//cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. 



const inputTarea = document.getElementById("inputTarea");
const btnAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");

btnAgregar.addEventListener("click", () => {
  const tarea = inputTarea.value.trim();

  if (tarea === "") {
    alert("⚠️ Debes escribir una tarea");
    return;
  }

  //elemento li
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  li.textContent = tarea;

  // btn eliminar
  const btnEliminar = document.createElement("button");
  btnEliminar.className = "btn btn-danger btn-sm";
  btnEliminar.textContent = "Eliminar";

  btnEliminar.addEventListener("click", () => {
    listaTareas.removeChild(li);
    console.log("-Tarea eliminada:", tarea);
  });

  li.appendChild(btnEliminar);
  listaTareas.appendChild(li);

  console.log("+Tarea agregada:", tarea);

  //limpiar
  inputTarea.value = "";
});
