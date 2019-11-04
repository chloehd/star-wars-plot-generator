import React, { Component } from "react";
import "./App.css";
import SearchPlanet from "./SearchPlanet";
import Plot from "./Components/Plot";
import { PlotData } from "./PlotData";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: [],
      people: [],
      plotDataIsShow: true,
      resource: "",
    }
  }

  componentDidMount = () => {
    fetch(`https://swapi.co/api/planets/`)
      .then(res => {
        res.json().then(data => this.setState({ planets: data.results }));
      })
      .catch(err => console.log(err));
  };

  togglePlot = () => {
    this.setState(state => ({ plotDataIsShow: !state.plotDataIsShow }));
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Plot Generator</h1>
        </header>
  
      <SearchPlanet planets={this.state.planets} />
      <Plot onClick={this.togglePlot} />
      </div>
    );
  }
}

export default App;
