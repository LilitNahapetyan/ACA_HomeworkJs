const btn = document.getElementById("btn");
const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");
const input = document.getElementById("input");
const output = document.getElementById("output");
const table = document.getElementById("table");

let showBookCount = 0;
let pages = 0;
btn.addEventListener("click", () => {
  const inputValue = input.value.split(" ").join("+");
  output.innerHTML = "";
  fetch("http://openlibrary.org/search.json?q=" + inputValue)
    .then((b) => b.json())
    .then((response) => {
      if (response.numFound > 100) {
        showBookCount += 100;
      } else {
        showBookCount = response.numFound;
      }
      table.innerHTML += `Total count: ${response.numFound}`;
      //pages = response.numFound / 100;
      for (let i = 0; i <= 100; i++) {
        table.innerHTML += `
    
    <tr>
      <th>Title:</th>
      <th id="title">${response.docs[i].title}</th>
    </tr>
    <tr>
      <th>Author Name:</th>
      <th id="author">${response.docs[i].author_name[0]}</th>
    </tr>
    <tr>
      <th>Publish year:</th>
      <th id="year">${response.docs[i].first_publish_year}</th>
    </tr>
    <tr>
      <th>Subject:</th>
      <th id="subject">${response.docs[i].subject}</th>
    </tr>
    <br/>
  
    `;
      }
    });
});
