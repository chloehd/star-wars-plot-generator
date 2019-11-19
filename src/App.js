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
      <div className="App container-fluid">
        <header className="App-header">
          <h1 className="text-warning">Star Wars Plot Generator</h1>
        </header>
        <div className="choose-elements container">
          <div className="row">
            <div className="choose-planet col-lg-5 col-md-12">
              <p className="p-choose-planet col-lg-12 col-md-12">
                Choose a planet
              </p>
              <Search
                resource="planets"
                onSelect={planet => {
                  this.setState({ selectedPlanet: planet });
                }}
              />
            </div>
            <div className="choose-person col-lg-5 col-md-12">
              <p className="p-choose-person col-lg-12 col-md-12">
                Choose a person
              </p>
              <Search
                resource="people"
                onSelect={person => {
                  this.setState({ selectedPerson: person });
                }}
              />
            </div>
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
