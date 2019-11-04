import React, { Component } from "react";

class SearchPlanet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      data: [],
      selectedItem: [],
      showData: true
    };
  }

  handleChange = e => {
    this.setState({ userInput: e.target.value });
  };

  render() {
    const filteredArray = this.props.planets.filter(dataFilter => {
      return dataFilter.name.toLowerCase().indexOf(this.state.userInput) !== -1;
    });

    const userChoice = select => {
      const selectValue = [];
      selectValue.push(select);

      this.setState({ selectedItem: selectValue });
      this.setState({ showData: false });
    };

    return (
      <form action="search">
        <input type="text" onChange={this.handleChange} />
        <ul>
          {this.state.userInput && this.state.showData === true
            ? filteredArray.map(oneData => {
                return (
                  <li
                    key={oneData.url}
                    onClick={() => userChoice(oneData.name)}
                  >
                    {oneData.name}
                  </li>
                );
              })
            : null}

          {this.state.selectedItem !== [] && this.state.showData === false ? (
            <li>{this.state.selectedItem}</li>
          ) : null}
        </ul>
      </form>
    );
  }
}

export default SearchPlanet;
