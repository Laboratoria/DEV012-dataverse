
import { orderByAlphabetical,filterDataByBrand,filterFactsByColor,getYearWithMaxModels} from './dataFunctions.js';

import { renderItems } from './view.js';
import data from './data/dataset.js';

//Crear una constante para guardar data filtrada
let dataFilterResult = data;

// Evento recibe la data y la muestra en HTML

const contenedorDeZapatillas = document.getElementById("root");
const todasLasZapatillas =[...data];
const campoContadorDeModelos=document.getElementById('dato')
const htmlDeTodasLasZapatillas = renderItems(todasLasZapatillas);
const contenedorAñoConMasModelos = document.querySelector ('#year')
contenedorAñoConMasModelos.innerHTML = ' '+ getYearWithMaxModels(data);
contenedorDeZapatillas.innerHTML = htmlDeTodasLasZapatillas;
campoContadorDeModelos.innerHTML = "cantidad de modelos: "+ parseInt(dataFilterResult.length);


// Evento para Ordenar la data por modelo

const ordenar = document.querySelector("select[name='ordenar']");
ordenar.addEventListener("change", (evento) => {
  const selectedOrder = evento.currentTarget.value;
  dataFilterResult = orderByAlphabetical(dataFilterResult, item => item.name, selectedOrder);
  campoContadorDeModelos.innerHTML = "cantidad de modelos: "+ dataFilterResult.length;
  contenedorDeZapatillas.innerHTML = renderItems(dataFilterResult);
});

// Evento para limpiar los filtros

const limpiar = document.querySelector('#button-clear');
limpiar.addEventListener("click", () => {
  ordenar.value= "todos";
  filtroColores.value= "allcolors";
  filter.value="allbrands";
  dataFilterResult = data;
  campoContadorDeModelos.innerHTML = "cantidad de modelos: "+ dataFilterResult.length;
  contenedorDeZapatillas.innerHTML = renderItems(data); 
});

// Evento para invocar la data filtrada por Marca

const filter = document.querySelector("select[name='brand']");
filter.addEventListener("change", (evento) => {
  const selectedBrand =  evento.currentTarget.value 
  const dataCopy = [...data];
  dataFilterResult = filterDataByBrand(dataCopy, 'brand', selectedBrand); // Pasa el valor seleccionado como tercer argumento
  //dataFilterResult = [...filteredData] //copia de la data
  campoContadorDeModelos.innerHTML = "cantidad de modelos: "+ dataFilterResult.length;
  contenedorDeZapatillas.innerHTML = renderItems(dataFilterResult); 
});
// Evento para invocar la data filtrada por Color

const filtroColores = document.querySelector("select[name='color']");
filtroColores.addEventListener("change", (evento) => {
  const selectedColor =  evento.currentTarget.value 
  dataFilterResult = filterFactsByColor(dataFilterResult, selectedColor); // Pasa el valor seleccionado como tercer argumento
  // dataFilterResult = [...ColorFiltrado]
  campoContadorDeModelos.innerHTML = "cantidad de modelos: "+ dataFilterResult.length;
  contenedorDeZapatillas.innerHTML = renderItems(dataFilterResult); 
});






