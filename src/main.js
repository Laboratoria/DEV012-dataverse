import { filterData } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

renderItems(data);

//Variable que almacena los filtros seleccionados y crean un objeto a la vez.
const filters = {};

const channel = document.querySelector("select[name='channel']");
const audience = document.querySelector("select[name='targetAudience']");
const status = document.querySelector("select[name='status']");



channel.addEventListener("change", applyFilters);
audience.addEventListener("change", applyFilters);
status.addEventListener("change", applyFilters);


function applyFilters() {

    //almacenar los valores seleccionados de cada filtro en filters{}
  filters.channel = channel.value;
  filters.audience = audience.value;
  filters.status = status.value;

// Recorrer el objeto filters
  filters.forEach((element) => {
    //filtrar los elementos por los selectores escogidos
    
  });

  renderItems(filteredElements);
  
};




// function selectPublic() {

//     const selectedPublic = audience.value;

//     const filteredElements = filterData (data, "targetAudience", selectedPublic );

//     renderItems(filteredElements)
// }




// function selectTransmission() {

//   const selectedTransmission = transmission.value;

//   const filteredTransmission = filterData(data, "status", selectedTransmission);

//   renderItems(filteredTransmission);

// };

// const selection = document.querySelectorAll("select[data-testid='select-filter']");


// selection.addEventListener("change", selectElements);

// function selectElements() {
    
//       const selectedElements = selection.value;
    
//       const filteredElements = filterData(data, selection.name , selectedElements);
    
//       renderItems(filteredElements);
      
//     };

//Steps: -Almacenar los selectores a filtrar
// const selectorsList = document.querySelectorAll("select[data-testid='select-filter']");
//[select1, select]

// - Almacenar los elementos 
{/* <select data-testid="select-filter" name="targetAudience" value=''>
<option value="">Todos</option>
<option value="Niños">Niños</option>
<option value="Niños y adolescentes">Niños y adolescentes</option>
</select> */}

// -Recorrer el listado de los selectores
//  selectorsList.forEach((element) => {

//  })

//Filtrar por cada selector(forEach)
//Renderizar los elementos filtrados
