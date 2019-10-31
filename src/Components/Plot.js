import React, { Component } from "react";

class Plot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenCharacter: "",
      chosenPlanet: ""
    };
  }

  handleClick = e => {
    e.preventDefault();

    console.log(e);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Generate a plot</button>
      </div>
    );
  }
}

export default Plot;
