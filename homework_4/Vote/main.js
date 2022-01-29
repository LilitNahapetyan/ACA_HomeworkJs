const addName = document.getElementById("add-name");
const addAge = document.getElementById("add-age");
const addCountry = document.getElementById("add-country");
const addBtn = document.getElementById("add-btn");
const table = document.querySelector("tbody");
const form = document.querySelector("form");
let rows = document.getElementById("myTable").rows;

function onAdd() {
  table.innerHTML += `
    <tr>
        <td>${addName.value}</td>
        <td>${addAge.value}</td>
        <td>${addCountry.value}</td>
        <td>${1}</td>
    </tr>
    `;
}

function vote() {
  for (i = 1; i < rows.length; i++)
    if (
      addName.value === rows[i].cells[0].innerHTML &&
      addAge.value === rows[i].cells[1].innerHTML &&
      addCountry.value === rows[i].cells[2].innerHTML
    ) {
      rows[i].cells[3].innerText++;
      let j = i;
      while (rows[j - 1].cells[3].innerText < rows[j].cells[3].innerText) {
        rows[j - 1].parentNode.insertBefore(rows[j], rows[j - 1]);
        j--;
      }
    }
}

function checkExistence() {
  if (
    table.innerText.includes(addName.value) &&
    table.innerText.includes(addAge.value) &&
    table.innerText.includes(addCountry.value)
  ) {
    return true;
  }
  return false;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkExistence()) {
    vote();
  } else {
    onAdd();
  }
  form.reset();
});
