// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data, filterBy, value) => {
  const filteredData = [];

  data.array.forEach(element => {
    if(element[filterBy] === value){
      filteredData.push(element)
    }
  });
  return filteredData;
  };

export const anotherExample = () => {
  return [];
};
