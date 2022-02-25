const table = document.getElementById("table");

fetch("https://ghibliapi.herokuapp.com/films").then((responce) => {
  return responce.json();
}).then(json => {
  json.forEach(item => {
    table.innerHTML += `
    <tr>
        <td>${item.title}</td>
        <td>${item.release_date}</td>
        <td>${item.director}</td>
        <td>${item.description}</td>
    </tr>
    `;

  });
  console.log(title);
});
