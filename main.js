/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/data.json
const data_namespaceObject = JSON.parse('[{"id":26,"title":"Побег из Шоушенка","imdb":9.3,"year":1994},{"id":25,"title":"Крёстный отец","imdb":9.2,"year":1972},{"id":27,"title":"Крёстный отец 2","imdb":9,"year":1974},{"id":1047,"title":"Тёмный рыцарь","imdb":9,"year":2008},{"id":223,"title":"Криминальное чтиво","imdb":8.9,"year":1994}]');
;// CONCATENATED MODULE: ./src/js/sorting.js
const sortBy = function (arr) {
  for (var _len = arguments.length, sortByArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sortByArgs[_key - 1] = arguments[_key];
  }
  arr.sort(function (a, b) {
    let sortResult = 0;
    sortByArgs.forEach(function (arg) {
      if (sortResult != 0) {
        return;
      } else {
        if (a[arg] < b[arg]) {
          sortResult = -1;
          return;
        }
        if (a[arg] > b[arg]) {
          sortResult = 1;
          return;
        }
      }
    });
    return sortResult;
  });
};
;// CONCATENATED MODULE: ./src/js/table_handling.js
function generateRow(id, title, year, imdb) {
  let newRow = document.createElement("tr");
  newRow.innerHTML = `<tr>
    <td>${id}</td>
    <td>${title}</td>
    <td>(${year})</td>
    <td>imdb: ${Number(imdb).toFixed(2)}</td>
  </tr>`;
  return newRow;
}
function findTargetHeader(property, headers, classname) {
  deactivateArrow(headers);
  let target = headers.find(item => item.textContent === property);
  target.classList.add(classname);
}
function deactivateArrow(headers) {
  headers.forEach(item => item.classList.remove("active_sort_up", "active_sort_down"));
}
function generateDomTable(parentElement, array) {
  const tableRows = [...document.querySelectorAll("tr")].slice(1);
  for (let item of tableRows) {
    item.remove();
  }
  for (let element of array) {
    let item = generateRow(element.id, element.title, element.year, element.imdb);
    parentElement.appendChild(item);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js



document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("tbody");
  const headers = [...document.querySelectorAll("th")];
  const resArray = data_namespaceObject;
  generateDomTable(tableBody, resArray);
  const sortingOrder = ["id", "id_reverse", "title", "title_reverse", "year", "year_reverse", "imdb", "imdb_reverse"];
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
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;