import React from "react";
import "./App.css";
import {Data} from "./Data";

function App() {
  const data = Data();

  const handleChange = () => {
    console.log(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Plot Generator</h1>

        <p>Choose your character</p>
        <button onClick={handleChange}>Hey</button>
      </header>
    </div>
  );
}

export default App;
