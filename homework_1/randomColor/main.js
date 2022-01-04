btn = document.getElementById("btn");


const listColors = ['#E3CEDD','#E378C5','#E378A3','#8578A3','#FFC6BC','#31B9E7','#FFE500','#20B2AA','#F0EAD6','#004242'];
btn.addEventListener("click",function(){
    document.body.style.backgroundColor = listColors[Math.floor(Math.random() * 10)];
})