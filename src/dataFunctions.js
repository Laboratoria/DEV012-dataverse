export function filterData(data, filterBy, value) {
  if (filterBy === "familia") {
    return data.filter((bee) => bee.facts && bee.facts.familia === value);
  }
  return data.filter((bee) => bee[filterBy] === value);
}
export function sortData(data, sortBy, sortOrder) {
  return data.slice().sort((a, b) => {
    if (sortBy === "name") {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else if (sortOrder === "desc") {
        return b.name.localeCompare(a.name);
      }
    }
    return 0;
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
