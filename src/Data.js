import { useEffect, useState } from "react";

export const Data = () => {
  const url = "https://swapi.co/api/people";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url, { mode: "cors" })
      .then(function(response) {
        console.log(response.json());
      })
      .catch(function(error) {
        console.log("Request failed", error);
      });
    }, [data]);
    return data;
};
