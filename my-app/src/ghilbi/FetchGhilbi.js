import { useState,useEffect } from "react";
import ItemTable from "./ItemTable";
import "./ghilbi.css";

function FetchGhilbi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((responce) => responce.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <ItemTable data={data} />
    </div>
  );
}

export default FetchGhilbi;
