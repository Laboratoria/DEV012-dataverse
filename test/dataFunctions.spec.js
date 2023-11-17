// Importa un objeto llamado 'data' desde "./data.js y lo renobra como fakeData"
import { data as fakeData } from "./data.js";
// Imprime el contenido del objeto en la consola
window.console.log(fakeData);

// Importa funciones y datos necesarios para las pruebas
import { filterData, sortData, computeStats } from "../src/dataFunctions.js";
import data from "../src/data/dataset.js";
import { renderItems } from "../src/view.js";

// Bloque de pruebas para la funcionalidad de filtrado de datos
describe("Data Filtering", () => { //Describe es una función que agrupa conjunto de pruebas , el argumento Data Filtering es una descripcion del conjunto
  it("filters data by family correctly", () => { // it representa prueba individual
    const filteredData = filterData(data, "familia", "Apidae"); //Constante filterData almacena el resultado de aplicar la funcion filter data a los 
    //datos Data utilizando como criterio la propiedad familia con el valor de Apidae
    
    // Verifica que todos los elementos tengan la familia "Apidae"
    expect(filteredData.every((bee) => bee.facts.familia === "Apidae")).toBe(true);//expectativa sobre el resultado del filtrado, 
    //FilteredData.every(...) verifica que para cada elemento en filteredData, la propiedad familia en la propiedad facts sea igual a "Apidae".
    //toBe(true) asegura que esta condición sea verdadera para todos los elementos, es decir, que todos tengan la familia "Apidae".
  });

  it("filters data when an invalid family is selected", () => {
    const filteredData = filterData(data, "familia", "InvalidFamily");
    // Verifica que no haya datos después de filtrar por una familia no válida
    expect(filteredData.length).toBe(0); //está verificando que la longitud del array filteredData sea exactamente igual a 0.
  });

  it("filters data when an invalid family is selected", () => {
    const filteredData = filterData(data, "pepito", "InvalidFamily"); // Modificada
    // Verifica que no haya datos después de filtrar por un campo no válido
    expect(filteredData.length).toBe(0);
  });
});

// Bloque de pruebas para la funcionalidad de ordenación de datos
describe("Data Sorting", () => {
  it("sorts data in ascending order by name", () => {
    const sortedData = sortData(data, "name", "asc");
    // Verifica que los nombres estén ordenados en orden ascendente
    expect(sortedData[0].name <= sortedData[1].name).toBe(true);
  });

  it("sorts data in descending order by name", () => {
    const sortedData = sortData(data, "name", "desc");
    // Verifica que los nombres estén ordenados en orden descendente
    expect(sortedData[0].name >= sortedData[1].name).toBe(true);
  });

  it("sorts data in descending order by name", () => {
    const sortedData = sortData([], "pepito", "desc"); // Modificada
    // Verifica que no haya cambios al intentar ordenar una lista vacía
    expect(sortedData).toBe([]);
  });
});

// Bloque de pruebas para la funcionalidad de renderizado de datos
describe("Data Rendering", () => {
  it("renders data correctly", () => {
    const renderedData = renderItems(data);
    const listItemElements = renderedData.querySelectorAll("li");
    // Verifica que la cantidad de elementos renderizados sea igual a la longitud de los datos
    expect(listItemElements.length).toBe(data.length);
  });
});

// Bloque de pruebas para la funcionalidad de cálculo de estadísticas
describe("Statistics Computation", () => {
  it("computes statistics correctly", () => {
    const stats = computeStats(data);
    // Verifica que la cantidad total de elementos sea igual a la longitud de los datos
    expect(stats.totalItems).toBe(data.length);
  });
});
