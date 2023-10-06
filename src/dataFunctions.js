// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data, filterBy, value) => {
  const filteredData = [];

  data.forEach((element) => {
    if (element[filterBy] === value) {
      filteredData.push(element);
    } 
  });

  if (filteredData.length > 0) {
    return filteredData;
  }

  return data
};

export const anotherExample = () => {
  return [];
};
