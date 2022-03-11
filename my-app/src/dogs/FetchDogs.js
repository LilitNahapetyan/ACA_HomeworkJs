import { useState, useEffect } from "react";

function FetchDogs() {
  const [breed, setBreed] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    if (breed) {
      fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then((responce) => responce.json())
        .then((json) => setImg(json.message));
    }
  }, [breed]);

  const selectedBreed = (e) => {
    setBreed(e.target.value);
  };

  return (
    <div>
      <div>
        <select onChange={selectedBreed}>
          <option value="akita">Akita </option>
          <option value="beagle">Beagle </option>
          <option value="dalmatian">Dalmatian </option>
          <option value="germanshepherd">German Shepherd </option>
          <option value="husky">Husky </option>
          <option value="labrador">Labrador </option>
          <option value="pug">Pug </option>
          <option value="retriever">Golden Retriever </option>
          <option value="spaniel">Cocker Spaniel </option>
        </select>
      </div>
      {img && <img src={img} />}
    </div>
  );
}

export default FetchDogs;
