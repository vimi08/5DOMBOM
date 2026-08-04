const generaciones = [
  {
    nombre: "Generación Z",
    desde: 1994,
    hasta: 2010,
    rasgo: "Irreverencia 😝",
  },
  {
    nombre: "Generación Y (Millennials)",
    desde: 1981,
    hasta: 1993,
    rasgo: "Frustración 😔",
  },
  {
    nombre: "Generación X",
    desde: 1969,
    hasta: 1980,
    rasgo: "Obsesión por el éxito 😎",
  },
  { nombre: "Baby Boom", desde: 1949, hasta: 1968, rasgo: "Ambición 😏" },
  {
    nombre: "Silent Generation",
    desde: 1930,
    hasta: 1948,
    rasgo: "Austeridad 😥",
  },
];

//clase Persona
class Persona {
  constructor(nombre, apellido, dni, genero, peso, altura, fechaNacimiento) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.genero = genero;
    this.peso = peso;
    this.altura = altura;
    this.fechaNacimiento = fechaNacimiento; // objeto Date
    this.edad = this.calcularEdad();
    console.log("👤 Persona creada:", this);
  }

  calcularEdad() {
    const hoy = new Date();
    let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
    if (
      mes < 0 ||
      (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())
    ) {
      edad--;
    }
    console.log("Edad calculada:", edad);
    return edad;
  }

  mostrarGeneracion() {
    const anio = this.fechaNacimiento.getFullYear();
    for (let gen of generaciones) {
      if (anio >= gen.desde && anio <= gen.hasta) {
        console.log("Generación encontrada:", gen.nombre);
        return `${this.nombre} pertenece a la ${gen.nombre}. Rasgo característico: ${gen.rasgo}`;
      }
    }
    console.log("Generación no definida");
    return "Generación no definida en la tabla.";
  }

  esMayorDeEdad() {
    console.log("Verificando mayoría de edad:", this.edad);
    return this.edad >= 18
      ? `${this.nombre} ${this.apellido} es mayor de edad ✅`
      : `${this.nombre} ${this.apellido} es menor de edad ❌`;
  }

  mostrarDatos() {
    console.log("Mostrando datos de la persona");
    return `
    Nombre: ${this.nombre}
    Apellido: ${this.apellido}
    Edad: ${this.edad}
    DNI: ${this.dni}
    Género: ${this.genero}
    Peso: ${this.peso} kg
    Altura: ${this.altura} cm
    Año de nacimiento: ${this.fechaNacimiento.getFullYear()}
    `;
  }
}
let personaActual = null; //variable global

function mostrarEnPantalla(mensaje, tipo = "info") {
  console.log("Mostrando en pantalla:", mensaje);
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensaje}</div>`;
}

//evento click
document.querySelector("#formPersona button").addEventListener("click", () => {
  console.log("Click en Crear Persona");

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const dni = document.getElementById("dni").value;
  const genero = document.getElementById("sexo").value;
  const peso = parseFloat(document.getElementById("peso").value) || 0;
  const altura = parseFloat(document.getElementById("altura").value) || 0;
  const fechaInput = document.getElementById("fechaNacimiento").value;

  if (!fechaInput) {
    console.log("⚠️ Fecha de nacimiento inválida");
    alert("⚠️ Debes ingresar una fecha de nacimiento válida");
    return;
  }

  const fechaNacimiento = new Date(fechaInput);

  personaActual = new Persona(
    nombre,
    apellido,
    dni,
    genero,
    peso,
    altura,
    fechaNacimiento,
  );

  alert(`👤Persona ${personaActual.nombre} creada correctamente`);
  mostrarEnPantalla(
    `👤Persona ${personaActual.nombre} creada correctamente`,
    "success",
  );
});

// btn mostrar Generación
document.getElementById("btnGeneracion").addEventListener("click", () => {
  console.log("Click en Mostrar Generación");
  if (personaActual) {
    alert(personaActual.mostrarGeneracion());
    mostrarEnPantalla(personaActual.mostrarGeneracion(), "info");
  }
});

// btn de edad
document.getElementById("btnMayorEdad").addEventListener("click", () => {
  console.log("Click en Es Mayor de Edad?");
  if (personaActual) {
    alert(personaActual.esMayorDeEdad());
    const tipo = personaActual.edad >= 18 ? "success" : "warning";
    mostrarEnPantalla(personaActual.esMayorDeEdad(), tipo);
  }
});

// btn de mostrar Datos
document.getElementById("btnDatos").addEventListener("click", () => {
  console.log("Click en Mostrar Datos");
  if (personaActual) {
    alert(personaActual.mostrarDatos());
    mostrarEnPantalla(
      `<pre>${personaActual.mostrarDatos()}</pre>`,
      "secondary",
    );
  }
});
