import React, { Component } from "react";

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
      <div className="search-bar">
        <input
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
    );
  }
}

export default Search;
