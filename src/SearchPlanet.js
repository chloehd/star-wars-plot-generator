import React from "react";
import { Data } from "./Data";


export const SearchPlanet = () => {
  const [data, loading] = Data(
    "https://swapi.co/api/planets/"
  );
  return (
    <>
      <h1>Planets</h1>
      {loading ? (
        "Loading..."
      ) : (
        <ul>
          {data.results.map(({ name, url }) => (
            <li key={`${url}`}>
              <p>{name} – {url}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}