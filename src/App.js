import React, { Component } from "react";
import "./App.css";
import Search from "./Search";
import Plot from "./Components/Plot";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPlanet: null,
      selectedPerson: null
    };
  }

  togglePlot = () => {
    this.setState(state => ({ plotDataIsShow: !state.plotDataIsShow }));
  };

  render() {
    const { selectedPerson, selectedPlanet } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Plot Generator</h1>
        </header>

        <Search
          resource="planets"
          onSelect={planet => {
            this.setState({ selectedPlanet: planet });
          }}
        />
        <Search
          resource="people"
          onSelect={person => {
            this.setState({ selectedPerson: person });
          }}
        />
        {selectedPerson && selectedPlanet && <Plot person={selectedPerson} planet={selectedPlanet}/>}
      </div>
    );
  }
}

export default App;
