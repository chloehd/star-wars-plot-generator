import React, { Component } from "react";

const title = person => `${person} is sceptical`;

const plot = (person, planet) => `
  Our hero ${person}, not completely convinced by the way recently taken by the Star Wars saga, decided to 
  go to ${planet} to find peace and to meditate. 
  `;

class Plot extends Component {
  render() {
    return (
      <div className="main-plot">
        <p className="plot-title">{title(this.props.person)}</p>
        <p className="plot">{plot(this.props.person, this.props.planet)}</p>
      </div>
    );
  }
}

export default Plot;
