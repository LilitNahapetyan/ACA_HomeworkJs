import { useState } from "react";

const useFetch = (initState) => {
  const [data, setData] = useState(initState);

  const fetchData = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data));
  }

  return [
    data,
    fetchData
  ];
};

export default useFetch;