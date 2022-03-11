import "./App.css";
import FetchGhilbi from "./ghilbi/FetchGhilbi";
import FetchDogs from "./dogs/FetchDogs";
import FetchBooks from "./books/FetchBooks";
import { useState } from "react";



function App() {
  const [showFilmTable, setShowFilmTable] = useState(false);
  const [showDogsTable,setShowDogsTable] = useState(false);
  const[showBooksTable,setShowBooksTable] = useState(false);
  

  const buttonFunctionForFilm = () => {
    setShowFilmTable(!showFilmTable);
    setShowDogsTable(false);
    setShowBooksTable(false);
  };

  const buttonFunctionForDogs = () => {
    setShowDogsTable(!showDogsTable);
    setShowFilmTable(false);
    setShowBooksTable(false);
  }

  const buttonFunctionForBooks = () => {
    setShowBooksTable(!showBooksTable);
    setShowDogsTable(false);
    setShowFilmTable(false);
  }

  return (
    <div>
      <button onClick={buttonFunctionForFilm}>Task 1(Film)</button>
      <button onClick={buttonFunctionForDogs}>Task 2(Dogs)</button>
      <button onClick={buttonFunctionForBooks}>Task 3(Books)</button>
      <div>
        {showFilmTable && <FetchGhilbi />}
        {showDogsTable && <FetchDogs />}
        {showBooksTable && <FetchBooks/>}
      </div>
    </div>
  );
}

export default App;


