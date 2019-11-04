import React, { Component } from "react";

class Search extends Component {
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

    if (e.target.value === "") {
      this.setState({ showData: true });
    }
  };

  render() {
    const { userInput, showData, selectedItem } = this.state;

    const filteredArray = this.props.planets.filter(dataFilter => {
      return dataFilter.name.toLowerCase().indexOf(userInput) !== -1;
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
          {userInput && showData === true
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

          {selectedItem !== [] && showData === false ? (
            <li>{this.state.selectedItem}</li>
          ) : null}
        </ul>
      </form>
    );
  }
}

export default Search;
