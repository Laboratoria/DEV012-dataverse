import { filtrarDatos } from './dataFunctions.js';
import { dataOrdenadaAZ } from './dataFunctions.js';
import { dataOrdenadaZA } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const container = document.querySelector("#root");
container.innerHTML = renderItems(data);
const dataManipulada = data;

const selectFilter = document.querySelector('select[name="clasificacion"]');
const selectSort = document.querySelector('select[name="name"]');
selectFilter.addEventListener('change', (event) => {

  const selectedValue = event.target.value; //por qué value?
  const dataFiltrada = filtrarDatos(dataManipulada, selectedValue);
  container.innerHTML = renderItems(dataFiltrada);
  selectSort.addEventListener('change', function (event) {

    let sortedData = event.target.value;
    if (selectSort.value === "desc") {
      sortedData = dataOrdenadaAZ(dataFiltrada); // Utiliza la función de ordenamiento
    } else if (selectSort.value === "asc") {
      sortedData = dataOrdenadaZA(dataFiltrada); // Utiliza la función de ordenamiento
    }
    container.innerHTML = renderItems(sortedData);

  });
})

selectSort.addEventListener('change', function (event) {
  let sortedData = event.target.value;
  if (selectSort.value === "desc") {
    sortedData = dataOrdenadaAZ(dataManipulada); // Utiliza la función de ordenamiento
  } else if (selectSort.value === "asc") {
    sortedData = dataOrdenadaZA(dataManipulada); // Utiliza la función de ordenamiento
  }
  container.innerHTML = renderItems(sortedData);

});


//Con esta modificación, solo se crea un elemento ul una vez, y los elementos li se agregan a ese elemento ul en lugar de crear múltiples elementos ul. Además, se utiliza selectedSort.innerHTML = ''; para limpiar el contenido del elemento ul en cada cambio, de modo que se actualice adecuadamente con la nueva información.


const clearbtn = document.querySelector('[data-testid="button-clear"]');
clearbtn.addEventListener("click", function () {
  
  container.innerHTML = renderItems(data);


});





//console.log(dataOrdenadaAZ(data));

//console.log(dataOrdenadaZA(data));
