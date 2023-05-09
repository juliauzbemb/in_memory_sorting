import data from "./data.json";
import { sortBy } from "./sorting";

import { findTargetHeader, generateDomTable } from "./table_handling";

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("tbody");
  const headers = [...document.querySelectorAll("th")];
  const resArray = data;

  generateDomTable(tableBody, resArray);

  const sortingOrder = [
    "id",
    "id_reverse",
    "title",
    "title_reverse",
    "year",
    "year_reverse",
    "imdb",
    "imdb_reverse",
  ];
  let index = 0;

  setInterval(() => {
    let maxIndex = 7;
    if (index <= maxIndex && index % 2 == 0) {
      sortBy(resArray, sortingOrder[index]);
      let className = "active_sort_down";
      findTargetHeader(sortingOrder[index], headers, className);
      generateDomTable(tableBody, resArray);
    }
    if (index <= maxIndex && index % 2 !== 0) {
      resArray.reverse();
      let className = "active_sort_up";
      findTargetHeader(sortingOrder[index - 1], headers, className);
      generateDomTable(tableBody, resArray);
    }
    index += 1;
    if (index === 8) {
      index = 0;
    }
  }, 2000);
});
