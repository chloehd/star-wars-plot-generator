import React, { Component } from "react";

class SearchPlanet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      data: [],
      selectedItem: []
    };
  }

  componentDidMount = () => {
    fetch("https://swapi.co/api/planets/")
      .then(res => {
        res.json().then(data => this.setState({ data: data.results }));
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({ userInput: e.target.value });
  };

  render() {
    const filteredArray = this.state.data.filter(dataFilter => {
      return dataFilter.name.toLowerCase().indexOf(this.state.userInput) !== -1;
    });

    const userChoice = select => {
      const selectValue = [];
      selectValue.push(select);

      this.setState({ selectedItem: selectValue });
      console.log(selectValue);
    };

    return (
      <form action="search">
        <input type="text" onChange={this.handleChange} />
        <ul>
          {this.state.userInput
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
        </ul>
      </form>
    );
  }
}

export default SearchPlanet;
