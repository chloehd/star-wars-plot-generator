import React, { Component } from "react";

const plot = (person, planet) => `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices rutrum convallis. 
  ${person} et lorem fermentum, bibendum urna fermentum, rutrum metus. 
  Morbi dolor dolor, venenatis vel risus a, porttitor consectetur est. 
  Ut ac ultrices neque. Cras ut volutpat nibh. Pellentesque a dui sit amet sapien tempus blandit. 
  Nunc fermentum tincidunt diam eu vulputate.

  Phasellus facilisis odio sed varius ${planet}. Vestibulum lacinia risus at magna ultrices, 
  aliquet efficitur justo fringilla. Proin elementum rutrum orci, at tristique ligula sagittis ac. 
  Interdum et malesuada fames ac ante ipsum primis in faucibus. 
  `;

class Plot extends Component {
  render() {
    return (
      <div>
        <p className="plot">{plot(this.props.person, this.props.planet)}</p>
        <button value="Reset Form" class="btn btn-danger">
          Try again
        </button>
      </div>
    );
  }
}

export default Plot;
