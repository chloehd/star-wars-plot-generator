import React, { useState } from "react";
import "./App.css";
import { SearchPlanet } from "./SearchPlanet";

function App() {
  const [userInputPlanet, setUserInputPlanet] = useState("");

  const handleChangePlanet = e => {
    setUserInputPlanet(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Plot Generator</h1>
      </header>

      <SearchPlanet onChange={handleChangePlanet}/>
    </div>
  );
}

export default App;
