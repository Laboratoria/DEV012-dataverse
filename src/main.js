import { filterData, sortData, computeStats } from "./dataFunctions.js";
import data from "./data/dataset.js";
import { renderItems } from "./view.js"; //renderItems Generar dinamicamente elementos del DoM que representan tarjetas de info 
//para cada elemento del array que contiene info de abejas, cada tarjeta incluye imagenes y datos espesificos.

// Selecciona el elemento del DOM para el selector de familia
const familySelect = document.querySelector('[name="familia"]');

// Selecciona el elemento del DOM para el selector de orden
const sortSelect = document.querySelector('[name="orden"]');

// Selecciona el botón de borrado por su atributo data-testid
const resetButton = document.querySelector('[data-testid="button-clear"]');

// Selecciona el elemento del DOM donde se mostrarán las tarjetas
const rootElement = document.querySelector("#root");

// Se Muestran estadisticas
const statsElement = document.getElementById("statistics");

// Agrega las tarjetas iniciales al elemento root
rootElement.appendChild(renderItems(data)); //actualiza las tarjetas en el navegador 

// Función para filtrar y mostrar datos según las selecciones
const filterAndRenderData = () => {
  // Obtiene el valor seleccionado en el selector de familia
  const selectedFamily = familySelect.value;

  // Obtiene el valor seleccionado en el selector de orden
  const selectedSortOrder = sortSelect.value;

  // Clona el arreglo original de datos
  let filteredData = data.slice(); 

  // Aplica filtro por familia si se selecciona una
  if (selectedFamily !== "") { //Verifica  si no es una cadena vacia se ejecuta el bloque del codigo 
    filteredData = filterData(filteredData, "familia", selectedFamily); // dentro del bloque se llama a  filterData con 3 argumentos ,
    // el result filtrado se asigna de nuevo a filterdData
  }

  // Aplica la ordenación de datos
  filteredData = sortData(filteredData, "name", selectedSortOrder); //funcion Filter data llama a sorData con 3 argumentos,
  // el resultado de asgna a filteData

  // Limpia el contenido actual y muestra las tarjetas filtradas
  rootElement.innerHTML = ""; //Manipulan contenido de HTML referenciado por roodElement, Se vacia su conteido y luego se añaden
  //elementos HTML generados por la funcion renderItems apartir de los datos ------ Actualiza la interfaz
  rootElement.appendChild(renderItems(filteredData));
  // Estadisticas --- se actualiza el contenido del elemento HTML referinciado pro StartsElement muestra el total de las tarjetas Filter data
  statsElement.innerHTML = `
 <p>Total de tarjetas: ${filteredData.length}</p>
 `;
};

// Agrega manejadores de eventos para cambios en los selectores
familySelect.addEventListener("change", filterAndRenderData); //agregar el evento (e)
sortSelect.addEventListener("change", filterAndRenderData);

// Agrega un manejador de eventos al botón de borrado
resetButton.addEventListener("click", (e) => {
  // Restablece los selectores de filtro y muestra todas las tarjetas sin filtro
  familySelect.value = "";
  sortSelect.value = e.target.value; // Asumiendo que "asc" es el valor predeterminado
  filterAndRenderData();
});

// Llama a la función para mostrar los datos al cargar la página
filterAndRenderData();

// Calcula estadísticas y las muestra en la consola
const stats = computeStats(data);
console.log("Estadísticas:", stats);
