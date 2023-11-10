export function filterData(data, filterBy, value) {
  if (filterBy === "familia") {
    // Filtrar los elementos donde 'facts.familia' sea igual a 'value'
    const filteredData = data
      .filter((bee) => bee.facts && bee.facts.familia === value) // Filtra los elementos
      .map((bee) => ({
        ...bee,
        [filterBy]: Number(bee[filterBy]), // Convierte a número si es necesario
      }));
    return filteredData;
  }
  // Filtrar los elementos donde 'filterBy' sea igual a 'value', convirtiendo a número si es necesario
  const filteredData = data
    .filter((bee) => bee[filterBy] === value) // Filtra los elementos
    .map((bee) => ({
      ...bee,
      [filterBy]: Number(bee[filterBy]), // Convierte a número si es necesario
    }));
  return filteredData;
}

export function sortData(data, sortBy, sortOrder) {
  return data.slice().sort((a, b) => {
    if (sortBy === "name") {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name); // Ordenar alfabéticamente de manera ascendente
      } else if (sortOrder === "desc") {
        return b.name.localeCompare(a.name); // Ordenar alfabéticamente de manera descendente
      }
    }
    return 0; // Si no se está ordenando por 'name', no se realiza ninguna modificación
  });
}

export function computeStats(data) {
  const totalItems = data.length;
  const totalDescriptionLength = data.reduce(
    (sum, bee) => sum + bee.description.length,
    0
  );
  const avgDescriptionLength = totalDescriptionLength / totalItems;
  return {
    totalItems,
    avgDescriptionLength,
  };
}