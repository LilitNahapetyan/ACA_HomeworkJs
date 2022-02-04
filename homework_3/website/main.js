const btn = document.getElementById("homebtn");
const navbar = document.getElementById("nav");


btn.addEventListener("click", function(){
    if(navbar.style.display !== "none"){
        navbar.style.display = "none";
    }else{
        navbar.style.display = "block";
    }
});