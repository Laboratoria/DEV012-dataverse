export function filterData(data, filterBy, value) {
  // Si el filtro es por "familia"
  if (filterBy === "familia") {
    // Filtra los elementos donde 'facts.familia' sea igual a 'value'
    const filteredData = data
      .filter((bee) => bee.facts && bee.facts.familia === value)
      .map((bee) => ({
        ...bee,
        [filterBy]: Number(bee[filterBy]), // Convierte a número si es necesario
      }));
    return filteredData;
  }

  // Si el filtro no es por "familia"
  const filteredData = data
    .filter((bee) => bee[filterBy] === value)
    .map((bee) => ({
      ...bee,
      [filterBy]: Number(bee[filterBy]), // Convierte a número si es necesario
    }));
  return filteredData;
}

export function sortData(data, sortBy, sortOrder) {
  // Hace una copia de los datos para no modificar el array original
  return data.slice().sort((a, b) => {
    // Si se está ordenando por "name"
    if (sortBy === "name") {
      // Ordenar alfabéticamente de manera ascendente
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      }
      // Ordenar alfabéticamente de manera descendente
      else if (sortOrder === "desc") {
        return b.name.localeCompare(a.name);
      }
    }
    // Si no se está ordenando por "name", no se realiza ninguna modificación
    return 0;
  });
}

export function computeStats(data) {
  const totalItems = data.length;
  const totalDescriptionLength = data.reduce(
    // Suma la longitud de todas las descripciones en el conjunto de datos
    (sum, bee) => sum + bee.description.length,
    0
  );

  // Calcula la longitud promedio de las descripciones
  const avgDescriptionLength = totalDescriptionLength / totalItems;

  return {
    totalItems,
    avgDescriptionLength,
  };
}