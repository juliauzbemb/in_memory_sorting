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

export function findTargetHeader(property, headers, classname) {
  deactivateArrow(headers);
  let target = headers.find((item) => item.textContent === property);
  target.classList.add(classname);
}

function deactivateArrow(headers) {
  headers.forEach((item) =>
    item.classList.remove("active_sort_up", "active_sort_down")
  );
}

export function generateDomTable(parentElement, array) {
  const tableRows = [...document.querySelectorAll("tr")].slice(1);
  for (let item of tableRows) {
    item.remove();
  }
  for (let element of array) {
    let item = generateRow(
      element.id,
      element.title,
      element.year,
      element.imdb
    );
    parentElement.appendChild(item);
  }
}
