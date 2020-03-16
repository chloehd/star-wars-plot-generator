import React from "react";

export const Plot = props => {
  const title = person => `${person} is sceptical`;

  const plot = (person, planet) => `
  Our hero ${person}, not completely convinced by the way recently taken by the Star Wars saga, decided to 
  go to ${planet} to find peace and to meditate. 
  `;

  return (
    <div className="main-plot">
      <p className="plot-title">{title(props.person)}</p>
      <p className="plot">{plot(props.person, props.planet)}</p>
    </div>
  );
};
