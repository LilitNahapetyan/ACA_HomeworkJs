const dogs = document.getElementById("mySelect");
const btn = document.getElementById("button");
const dog_img = document.getElementById("dog_img");

btn.addEventListener("click", async () => {
  dog_img.innerHTML = "";
  const breed = dogs.options[dogs.selectedIndex].value;
  const responce = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );

  const json = await responce.json();
  const img = document.createElement("img");
  img.src = json.message;
  dog_img.append(img);
});
