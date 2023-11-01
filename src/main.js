import { filterData, sortData, computeStats } from "./dataFunctions.js";
import data from "./data/dataset.js";
import { renderItems } from "./view.js";
const familySelect = document.querySelector('[name="familia"]');
const sortSelect = document.querySelector('[name="orden"]');
const rootElement = document.getElementById("root");
rootElement.appendChild(renderItems(data));
const filterAndRenderData = () => {
  const selectedFamily = familySelect.value;
  const selectedSortOrder = sortSelect.value;
  let filteredData = data.slice(); // Clone the original data array
  if (selectedFamily !== "all") {
    filteredData = filterData(filteredData, "familia", selectedFamily);
  }
  filteredData = sortData(filteredData, "name", selectedSortOrder);
  rootElement.innerHTML = "";
  rootElement.appendChild(renderItems(filteredData));
};
familySelect.addEventListener("change", filterAndRenderData);
sortSelect.addEventListener("change", filterAndRenderData);
filterAndRenderData(); // Para que muestre los datos al cargar la página
// Calcular estadisticas
const stats = computeStats(data);
console.log("Estadísticas:", stats);
