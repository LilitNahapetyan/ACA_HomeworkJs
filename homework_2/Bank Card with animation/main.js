const inputNumber = document.querySelector(".card-number-input");
const inputName = document.querySelector(".card-name-input");
const inputMonth = document.querySelector(".month-input");
const inputYear = document.querySelector(".year-input");
const inputCvv = document.querySelector(".cvv-input");
const cardNumber = document.querySelector(".card-number");

document.querySelector(".cvv-input").onmouseenter = () => {
  document.querySelector(".front").style.transform = "perspective(1000px) rotateY(-180deg)";
  document.querySelector(".back").style.transform = "perspective(1000px) rotateY(0deg)";
}

document.querySelector(".cvv-input").onmouseout = () => {
  document.querySelector(".front").style.transform = "perspective(1000px) rotateY(0deg)";
  document.querySelector(".back").style.transform = "perspective(1000px) rotateY(-180deg)";
}
inputNumber.addEventListener('keyup', function(event) {
  const key = event.key;
  const en = /^[0-9]$/i.test(event.key);
  if (key === "Backspace") {
    CardNamberDel();
  }
  else if(!en){
    alert("Please,enter a number");
}
  else {
    CardNamberChanged(inputNumber)
  };
});



inputName.oninput = () => {
  document.querySelector(".card-holder-name").innerText = inputName.value.toUpperCase();
}

inputMonth.oninput = () => {
  document.querySelector(".exp-month").innerText = inputMonth.value + "/";
}

inputYear.oninput = () => {
  document.querySelector(".exp-year").innerText = inputYear.value;
}

inputCvv.oninput = () => {
    if(isNaN(inputCvv.value)){
        alert("Please,enter a valid cvv number");
    }
  document.querySelector(".cvv-box").innerText = inputCvv.value;
}


const CardNamberChanged = (input) => {
    
  if (input.value.length <= 16) {
    let i = cardNumber.innerHTML.indexOf("#");

    let change = "";
    change = cardNumber.innerHTML.substring(0, i) + input.value.slice(-1) + cardNumber.innerHTML.substring(i + 1);

    cardNumber.innerHTML = change;
  } else {
    alert("Please,check the input");
  }
}

const CardNamberDel = () => {


  let i = cardNumber.innerHTML.indexOf("#") - 1;
  if (i >= 0) {
    let change = "";
    change = cardNumber.innerHTML.substring(0, i) + "#" + cardNumber.innerHTML.substring(i + 1);

    cardNumber.innerHTML = change;

  } else {
    change = cardNumber.innerHTML.substring(0, cardNumber.innerHTML.length - 1) + "#";
    cardNumber.innerHTML = change;
  }
}
