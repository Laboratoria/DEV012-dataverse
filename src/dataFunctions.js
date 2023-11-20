// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//Función para seleccionar los filtros
export function filtrarDatos(data, selectedValue) {  
  
  if (selectedValue === "Todos los productos") {
    return data;
  }
  else if (selectedValue !== "Todos los productos"){
      
    const datosFiltrados=data.filter(element => element.clasificacion === selectedValue);
    return datosFiltrados;
  }
}

export function dataOrdenadaAZ(data){
  const dataCopy=[...data]; //función de propagación ayuda a copiar los datos de una matriz 
  dataCopy.sort(function(a,b){
    const dataA=a.planta.toLowerCase();
    const dataB= b.planta.toLowerCase();

    if (dataA > dataB) {
      return 1;
    }
    if (dataA < dataB) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  return dataCopy;
}
  

export function dataOrdenadaZA(data){
  const dataCopy= data.slice(0); //se tine que volver a almacenar para no trabajar con un arreglo ordenado, por eso muestra el mismo ordenamiento ambas veces
  dataCopy.sort(function(a,b){ //se usa slice para crear una copia superficial de un array (matriz) o para extraer un subconjunto de elementos
    const data1A=a.planta.toLowerCase();
    const data1B= b.planta.toLowerCase();

    if (data1A < data1B) {
      return 1;
    }
    if (data1A > data1B) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  return dataCopy;
}
  


/*const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  items.sort(function (a, b) {

    const itemsA = a.name.toLowerCase();
    const itemsB = b.name.toLocaleLowerCase();
    if (itemsA > itemsB) {
      return 1;
    }
    if (itemsA < itemsB) {
      return -1;
    }
    // a must be equal to b
      return 0;
  });
  console.log(items)*/
/*export function clasifFilter(elemento){
  if(elemento.Clasificacion === "antiácida"){
    return elemento;
  } 
  /// recuerda que es otro elemento de escucha para ese "filtro"
}

export function fortalecFilter(elemento){
  if(elemento.Clasificacion === "fortalecedora"){
    return elemento;
  } 
  /// recuerda que es otro elemento de escucha para ese "filtro"
}*/

//xport const anotherExample = () => {
//return [];
//};
