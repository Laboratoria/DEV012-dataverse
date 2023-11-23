import data from "./data/dataset.js";

//Función para crear los elementos de la data

export const tipoDeZapatillas = ((zapatillaDiv) => {
  const zapatillas=document.createElement(data);
  zapatillaDiv.textContent=zapatillas.data;
});


//Función para Ordenar Alfabeticamente el modelo de la marca filtrada

export const orderByAlphabetical=(data, getter,order='asc')=>{
//Creamos una copia del arreglo original
  const dataCopy=[...data];
  //Ordenamos la copia del arreglo
  dataCopy.sort((a, b) => {
    const first = getter(a);
    const second = getter(b);
    const compare = first.localeCompare(second);
    if (order === 'asc') {
      return compare;
    } else {
      return -compare;
    }
  });
  return dataCopy; // Devuelve la copia ordenada
};

// Función Pura para filtrar por marca de zapatillas

export const filterDataByBrand = (data, filterBy, value) => {
  const filteredBrand =[];
  for (const item of data) {
    if (item[filterBy] === value) {
      filteredBrand.push(item);
    }
  }
  return filteredBrand;
} 

// Función para filtrar por color de zapatilla

export const filterFactsByColor = (data,value) => {
  const copyOfData=[...data];
  return copyOfData.filter(element => element.facts.color === value);
};

//función de estadistica

export const getYearWithMaxModels = (data) => {
  const year = data.map(item => item.facts.modelyear);
  const frequency = year.reduce((acc, curr) => 
  // recorre la data encontrando los model year guardando en la variable frecuency el acumulador y el iterador
  { acc[curr] = (acc[curr] || 0) + 1;
    
    return acc;
  }, {});
  //se esablecen dos variables para guardar el iterador y la frecuencia obtenida
  let maxYear = 0;
  let maxCount = 0;
  Object.entries(frequency).forEach(([year, count]) => { 
  // el es un metodo object.entries va a tomar la clave (año) y el valor (frecuencia)
    if (count > maxCount) {
      maxCount = count;
      maxYear = year;
     
    }
  //entra al objeto y con esa frecuencia iterada va a contar por cada año cuantas veces se repite, si no se repite es 1 si se repite va guardando esa frecuencia y retoornaria el año que más se repita
  })
  return parseInt(maxYear);
}