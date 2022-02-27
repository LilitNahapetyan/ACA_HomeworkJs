const table = document.getElementById("table");

fetch("https://ghibliapi.herokuapp.com/films").then((responce) => {
  return responce.json();
}).then(json => {
  json.forEach(item => {
    table.innerHTML += `
    
    <tr>
      <th>Title:</th>
      <th id="title">${item.title}</th>
    </tr>
    <tr>
      <th>Description:</th>
      <th id="description">${item.description}</th>
    </tr>
    <tr>
      <th>Director:</th>
      <th id="director">${item.director}</th>
    </tr>
    <tr>
      <th>Producer:</th>
      <th id="producer">${item.producer}</th>
    </tr>
    <tr>
      <th>Release Date:</th>
      <th id="release">${item.release_date}</th>
    </tr>
    <br/>
  
    `;

  });
  console.log(title);
});