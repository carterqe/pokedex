import React, { Component } from "react";
import axios from "axios";
import { Header, Search, Pokedex } from "./components";
import "./App.scss";

class App extends Component {
  // initialize state
  constructor() {
    super();
    this.state = {
      error: false,
      pokemon: {},
    };
  }

  onSearchHandler = (query) => {
    // reset to remove p tag
    this.setState({ error: false });

    // http request - query = pokemon name or ID
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then(({ data }) => this.setState({ pokemon: data }))
      .catch(({ response }) => {
        if (response.status === 404) this.setState({ error: true });
      });
  };

  // jsx
  render() {
    const { error, pokemon } = this.state;
    return (
      // pokemon search handler

      <div className="App">
        <Header />
        <Search onSearchSubmit={(q) => this.onSearchHandler(q)} />
        {error && <p style={{ color: "red" }}>pokemon not found</p>}
        <Pokedex results={pokemon} />
      </div>
    );
  }
}

export default App;
