import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      data: [],
      selectedItem: null,
      loading: true
    };
  }

  componentDidMount = () => {
    const data = [];

    const url = `https://swapi.co/api/${this.props.resource}/`;

    // to have the entire database, loadData create a new array of objects
    const loadData = url => {
      return fetch(url)
        .then(res => {
          return res.json().then(json => {
            json.results.forEach(element => {
              data.push(element);
            });

            // as the database has many pages, check if another page exists
            if (json.next) {
              loadData(json.next);
              this.setState({ loading: true });
            }

            // if the database is entire loaded, this should stop the loading animation
            if (!json.next) {
              this.setState({ loading: false });
            }
          });
        })
        .catch(err => console.log(err));
    };

    loadData(url);

    // set the data to the new array of data created by the function loadData()
    this.setState({ data: data });
  };

  // retrieve the input of the user
  handleChange = e => {
    this.setState({ userInput: e.target.value });
  };

  // enable the delete button to hide the plot and to clear the selection
  handlePlanetClick = e => {
    e.preventDefault();
    this.setState({ selectedItem: null, userInput: "" });
    this.props.onSelect(null);
  };

  render() {
    const { userInput, selectedItem, data, loading } = this.state;

    // filter the data to match with the user input
    const filteredArray = data.filter(dataFilter => {
      return (
        dataFilter.name.toLowerCase().indexOf(userInput.toLowerCase()) !== -1
      );
    });

    // set the props to the selected item
    const userChoice = select => {
      this.setState({ selectedItem: select });
      this.props.onSelect(select);
    };

    return (
      <form action="search" className="row">
        {selectedItem ? null : (
          <input
            className="input-group-text col-lg-7 col-md-12"
            type="text"
            onChange={this.handleChange}
            placeholder="search..."
          />
        )}
        {loading && (
          <img
            className="loading"
            src="https://media.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif"
            alt="Loading"
          />
        )}
        <ul className="list-group col-lg-7">
          {selectedItem ? (
            <li className="list-group-item text-dark">{selectedItem}</li>
          ) : (
            userInput &&
            filteredArray.map(oneData => {
              return (
                <li
                  className="list-group-item text-dark"
                  key={oneData.url}
                  onClick={() => userChoice(oneData.name)}
                >
                  {oneData.name}
                </li>
              );
            })
          )}
        </ul>

        {selectedItem ? (
          <button
            className="btn btn-danger delete-btn"
            onClick={this.handlePlanetClick}
          >
            X
          </button>
        ) : null}
      </form>
    );
  }
}

export default Search;
