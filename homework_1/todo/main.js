var list = document.getElementsByTagName("LI");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', (e) => {
    if (i === 0 || list[i - 1].style.textDecoration === 'line-through')
      e.target.style.textDecoration = 'line-through';
  })
}

