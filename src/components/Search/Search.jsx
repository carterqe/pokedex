import React, { Component } from "react";
import searchBar from "../../assets/pngs/dialog-box.png"
import './Search.scss'

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };
  }

  render() {
    const { onSearchSubmit } = this.props;
    const { query } = this.state;

    return (
      <div className="search-container">
        <div className="search-bar">
          <img className="search-bar__img" src={searchBar} alt="searchbar" />
          <input
            className="input"
            placeholder="Search a Pokémon"
            onChange={(e) => this.setState({ query: e.target.value })}
          />
          <img
            className="magnifying-glass"
            src="https://cdn4.iconfinder.com/data/icons/8-bit/160/bit-08-512.png"
            onClick={() => onSearchSubmit(query)}
            alt="magnifying glass"
          />
        </div>
      </div>
    );
  }
}

export default Search;
