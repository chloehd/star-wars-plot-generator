import React, { useState } from "react";
import { Data } from "./Data";

export const SearchPlanet = () => {
  const [userInputPlanet, setUserInputPlanet] = useState("");
  const [data, loading] = Data("https://swapi.co/api/planets/");

  const handleChangePlanet = e => {
    setUserInputPlanet(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <p>Choose a planet</p>
      <input
        className="choose-planet"
        type="text"
        value={userInputPlanet}
        onChange={handleChangePlanet}
      />

      { loading ? (
        "Loading"
      ) : (
        <div className="results">
          {data.results.map(({ name, url }) => (
            <p key={`${url}`}>{name}</p>
          ))}
        </div>
      )}
    </>
  );
};
