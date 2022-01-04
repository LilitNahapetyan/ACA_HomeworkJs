const screen = document.getElementById("screen");
const input = document.getElementById("input");
const boldBtn = document.querySelector(".bold");
const itBtn = document.querySelector(".italic");
const delBtn = document.querySelector(".del");
const undBtn = document.querySelector(".underline");
const cBtn = document.querySelector(".capital");
const btnRed = document.getElementById("red");
const btnGreen = document.getElementById("green");


input.addEventListener("keydown",function(e){
    screen.innerHTML = e.target.value;
})

boldBtn.addEventListener("click",function(){
    screen.style.fontWeight = "bold";
})

itBtn.addEventListener("click",function(){
    screen.style.fontStyle = "italic";
})

delBtn.addEventListener("click",function(){
    screen.style.textDecoration = "line-through";
})

undBtn.addEventListener("click",function(){
    screen.style.textDecoration = "underline";}
)

cBtn.addEventListener("click",function(){
    screen.innerHTML = screen.innerHTML.toUpperCase();}
)

btnRed.addEventListener("click",function(){
    screen.style.color = "red";}
)

btnGreen.addEventListener("click",function(){
    screen.style.color = "green";}
)