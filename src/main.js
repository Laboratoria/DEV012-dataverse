import { filterData, sortData, computeStats } from "./dataFunctions.js";
import data from "./data/dataset.js";
import { renderItems } from "./view.js";

// Selecciona el elemento del DOM para el selector de familia
const familySelect = document.querySelector('[name="familia"]');

// Selecciona el elemento del DOM para el selector de orden
const sortSelect = document.querySelector('[name="orden"]');

// Selecciona el botón de borrado por su atributo data-testid
const resetButton = document.querySelector('[data-testid="button-clear"]');

// Selecciona el elemento del DOM donde se mostrarán las tarjetas
const rootElement = document.querySelector("#root");

// Agrega las tarjetas iniciales al elemento root
rootElement.appendChild(renderItems(data));

// Función para filtrar y mostrar datos según las selecciones
const filterAndRenderData = () => {
  // Obtiene el valor seleccionado en el selector de familia
  const selectedFamily = familySelect.value;

  // Obtiene el valor seleccionado en el selector de orden
  const selectedSortOrder = sortSelect.value;

  // Clona el arreglo original de datos
  let filteredData = data.slice();

  // Aplica filtro por familia si se selecciona una
  if (selectedFamily !== "") {
    filteredData = filterData(filteredData, "familia", selectedFamily);
  }

  // Aplica la ordenación de datos
  filteredData = sortData(filteredData, "name", selectedSortOrder);

  // Limpia el contenido actual y muestra las tarjetas filtradas
  rootElement.innerHTML = "";
  rootElement.appendChild(renderItems(filteredData));
};

// Agrega manejadores de eventos para cambios en los selectores
familySelect.addEventListener("change", filterAndRenderData);
sortSelect.addEventListener("change", filterAndRenderData);

// Agrega un manejador de eventos al botón de borrado
resetButton.addEventListener("click", () => {
  // Restablece los selectores de filtro y muestra todas las tarjetas sin filtro
  familySelect.value = "";
  sortSelect.value = "asc"; // Asumiendo que "asc" es el valor predeterminado
  filterAndRenderData();
});

// Llama a la función para mostrar los datos al cargar la página
filterAndRenderData();

// Calcula estadísticas y las muestra en la consola
const stats = computeStats(data);
window.console.log("Estadísticas:", stats);
