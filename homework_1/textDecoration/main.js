const screen = document.getElementById("screen");
const input = document.getElementById("input");
const boldBtn = document.querySelector(".bold");
const itBtn = document.querySelector(".italic");
const delBtn = document.querySelector(".del");
const undBtn = document.querySelector(".underline");
const cBtn = document.querySelector(".capital");
const btnRed = document.getElementById("red");
const btnGreen = document.getElementById("green");


function changeStyle(fontType, value) {
  var selected = window.getSelection();
  var span = '<span style= ' + fontType + ":" + value + ";>" + selected + '</span>';
  screen.innerHTML = screen.innerHTML.replace(selected, span);
}

input.addEventListener("keyup", function(e) {
  screen.innerHTML = e.target.value;
})

boldBtn.addEventListener("click", function() {
  changeStyle("font-weight", "bold");
})

itBtn.addEventListener("click", function() {
  changeStyle("font-style", "italic");
})

delBtn.addEventListener("click", function() {
  changeStyle("text-decoration", "line-through");
})

undBtn.addEventListener("click", function() {
  changeStyle("text-decoration", "underline");
})

cBtn.addEventListener("click", function() {
  var selected = window.getSelection().toString();

  var span = "<span>" + selected.toUpperCase() + "</span>";

  screen.innerHTML = screen.innerHTML.replace(window.getSelection(), span);
})

btnRed.addEventListener("click", function() {
  changeStyle("color", "red");
})

btnGreen.addEventListener("click", function() {
  changeStyle("color", "green");
})

