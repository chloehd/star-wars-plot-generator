import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      data: [],
      selectedItem: null
    };
  }

  componentDidMount = () => {
    const data = [];
    const url = `https://swapi.co/api/${this.props.resource}/`;

    const loadData = url => {
      return fetch(url).then(res => {
        return res.json().then(json => {
          json.results.forEach(element => {
            data.push(element);
          });

          if (json.next) {
            loadData(json.next);
          }
        });
      });
    };

    loadData(url);
    this.setState({ data: data });
  };

  handleChange = e => {
    this.setState({ userInput: e.target.value });
  };

  render() {
    const { userInput, selectedItem } = this.state;

    const filteredArray = this.state.data.filter(dataFilter => {
      return dataFilter.name.toLowerCase().indexOf(userInput) !== -1;
    });

    const userChoice = select => {
      this.setState({ selectedItem: select });
      this.props.onSelect(select);
    };

    return (
      <form action="search">
        <input type="text" onChange={this.handleChange} />
        <ul>
          {selectedItem ? (
            <li>{this.state.selectedItem}</li>
          ) : (
            userInput &&
            filteredArray.map(oneData => {
              return (
                <li key={oneData.url} onClick={() => userChoice(oneData.name)}>
                  {oneData.name}
                </li>
              );
            })
          )}
        </ul>
      </form>
    );
  }
}

export default Search;
