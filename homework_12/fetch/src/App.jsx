import { useState } from "react";
import useFetch from "./hooks/useFetch";

const url = "https://ghibliapi.herokuapp.com/films";
function App() {
  const [films, callFetch] = useFetch("");
  const [randomFilm, setRandomFilm] = useState("");
  const handleButtonClick = () => {
    callFetch(url);
  };
  const handleSelect = () => {
    setRandomFilm(films[Math.floor(Math.random() * 21)].title);
  };
  return (
    <div className="App">
      Do you want to watch film?{" "}
      <button onClick={handleButtonClick}>Yes!</button>
      {films && <button onClick={handleSelect}>Fetch random Film</button>}
      {randomFilm && <div>{randomFilm}</div>}
    </div>
  );
}
export default App;
