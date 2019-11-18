import React, { Component } from "react";
import "./App.css";
import Search from "./Components/Search";
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
          <h1 className="text-warning">Star Wars Plot Generator</h1>
        </header>
        <div className="choose-elements">
          <div className="choose-planet">
            <p className="p-choose-planet">Choose a planet</p>
            <Search
              resource="planets"
              onSelect={planet => {
                this.setState({ selectedPlanet: planet });
              }}
            />
          </div>
          <div className="choose-person">
            <p className="p-choose-person">Choose a person</p>
            <Search
              resource="people"
              onSelect={person => {
                this.setState({ selectedPerson: person });
              }}
            />
          </div>
        </div>

        {selectedPerson && selectedPlanet && (
          <Plot person={selectedPerson} planet={selectedPlanet} />
        )}
      </div>
    );
  }
}

export default App;
