import React, { useState } from "react";
import "./App.css";
import {SearchPlanet} from './SearchPlanet';

function App() {
  const [userInputCharacter, setUserInputCharacter] = useState("");
  const [userInputPlanet, setUserInputPlanet] = useState("");

  const handleChangeCharacter = e => {
    setUserInputCharacter(e.target.value);
  };

  const handleChangePlanet = e => {
    setUserInputPlanet(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Plot Generator</h1>
      </header>

      <p>Choose a character</p>
      <input
        className="choose-character"
        type="text"
        value={userInputCharacter}
        onChange={handleChangeCharacter}
      />
      <p>Choose a planet</p>
      <input
        className="choose-planet"
        type="text"
        value={userInputPlanet}
        onChange={handleChangePlanet}
      />
      <button>Hey</button>

      <SearchPlanet/>
    </div>
  );
}

export default App;
