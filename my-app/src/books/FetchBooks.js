import { useState, useEffect } from "react";

function FetchBooks() {
  const [inputValue, setInputValue] = useState("");
  const [numFound, setNumFound] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  //   useEffect(() => {
  //     if (inputValue) {
  //       fetch("http://openlibrary.org/search.json?q=" + input)
  //         .then((book) => book.json())
  //         .then((json) => {
  //           setNumFound(json.numFound);
  //         });
  //     }
  //   }, [inputValue]);

  const handleFormSubmit = (e) =>{
      e.preventDefault();
      const input = inputValue.split(" ").join("+");
      fetch("http://openlibrary.org/search.json?q=" + input)
           .then((book) => book.json())
          .then((json) => {
           setNumFound(json.numFound);
        });
  }

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     const input = inputValue.split(" ").join("+");
//     const res = await fetch("http://openlibrary.org/search.json?q=" + input);
//     const book = await res.json();

//     setNumFound(book.numFound);
//   };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="Search..."
          value={inputValue}
          onChange={handleInputChange}
        ></input>
        <button>Search</button>
      </form>
      {numFound}
    </div>
  );
}
export default FetchBooks;