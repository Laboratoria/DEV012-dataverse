import { data as fakeData } from "./data.js";
window.console.log(fakeData);

import { filterData, sortData, computeStats } from "../src/dataFunctions.js";
import data from "../src/data/dataset.js";
import { renderItems } from "../src/view.js";
describe("Data Filtering", () => {
  it("filters data by family correctly", () => {
    const filteredData = filterData(data, "familia", "Apidae");
    expect(filteredData.every((bee) => bee.facts.familia === "Apidae")).toBe(
      true
    );
  });
  it("filters data when an invalid family is selected", () => {
    const filteredData = filterData(data, "familia", "InvalidFamily");
    expect(filteredData.length).toBe(0);
  });
  it("filters data when an invalid family is selected", () => {
    const filteredData = filterData(data, "pepito", "InvalidFamily"); // modificada
    expect(filteredData.length).toBe(0);
  });
});
describe("Data Sorting", () => {
  it("sorts data in ascending order by name", () => {
    const sortedData = sortData(data, "name", "asc");
    expect(sortedData[0].name <= sortedData[1].name).toBe(true);
  });
  it("sorts data in descending order by name", () => {
    const sortedData = sortData(data, "name", "desc");
    expect(sortedData[0].name >= sortedData[1].name).toBe(true);
  });
  it("sorts data in descending order by name", () => {
    const sortedData = sortData([], "pepito", "desc"); // modificada
    expect(sortedData).toBe([]);
  });
});
describe("Data Rendering", () => {
  it("renders data correctly", () => {
    const renderedData = renderItems(data);
    const listItemElements = renderedData.querySelectorAll("li");
    expect(listItemElements.length).toBe(data.length);
  });
});
describe("Statistics Computation", () => {
  it("computes statistics correctly", () => {
    const stats = computeStats(data);
    expect(stats.totalItems).toBe(data.length);
  });
});
