import { useEffect, useState } from "react";

export const Data = () => {
  const url = "https://swapi.co/api/people";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(results => setData(results.data))
      .catch(error => console.log("Request failed", error));
  }, [data]);

  return data;
};
