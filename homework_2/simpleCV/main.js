const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const image = document.getElementById("image");
const famale = document.getElementById('famale');
const male = document.getElementById('male');
const birthday = document.getElementById("birthday");
const address = document.getElementById("address");
const city = document.getElementById("city");
const state = document.getElementById("state");
const form = document.getElementById("form");
const country = document.getElementById("country");
const div = document.getElementById("div");
const sbmt = document.getElementById("submit");


function datalist() {
  const length = state.options.length;
  for (let i = 0; i < length; i++) {
    div.innerHTML += "State" + options[0].value;
  }
}

function create() {
  const url = URL.createObjectURL(image.files[0]);
  div.innerHTML += `<img src="${url}" alt="Image" style="width:400px;height:400px;"></img><br/>`;
  div.innerHTML += "Name: " + name.value + "<br/>";
  div.innerHTML += "Email: " + email.value + "<br/>";
  div.innerHTML += "Phone: " + phone.value + "<br/>";

  if (famale.checked) {
    div.innerHTML += "Gender: Famale <br/>";
  } else {
    div.innerHTML += "Gender: Male";
  }
  
  div.innerHTML += "Birthday: " + birthday.value + "<br/>";
  div.innerHTML += "Address: " + address.value + "<br/>";
  div.innerHTML += "City: " + city.value + "<br/>";
  div.innerHTML += "State: " + state.value + "<br/>";
  div.innerHTML += "Country: " + country.value + "<br/>";
  
}
sbmt.addEventListener("click", function(event) {
  form.style['display'] = 'none';
  event.preventDefault();

  create();

})

