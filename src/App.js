import React from "react";
import "./App.css";
import SearchPlanet from "./SearchPlanet";
import Plot from "./Components/Plot";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Plot Generator</h1>
      </header>

    <SearchPlanet />
    <Plot />
    </div>
  );
}

export default App;
