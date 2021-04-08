import React, { Component } from "react";
import axios from "axios";
import { Header, Search, Pokedex, Randomize } from "./components";
import "./App.scss";

class App extends Component {
  // initialize state
  constructor() {
    super();
    this.state = {
      error: false,
      pokemon: {},
      pokemonId: 0
    };
  }

  onSearchHandler = (query) => {
    // reset to remove p tag
    this.setState({ error: false });
    if(Number(+query)) {
      this.setState({pokemonId: +query})
    }

    // http request - query = pokemon name or ID
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then(({ data }) => this.setState({ pokemon: data }))
      .catch(error => {
        console.log(error)
        this.setState({ error: true });
      });
  };

  navigatePokeId = (count) => {
    this.setState({pokemonId: this.state.pokemonId + count})

    this.onSearchHandler(this.state.pokemonId)
  }

  // jsx
  render() {
    const { error, pokemon } = this.state;
    return (
      // pokemon search handler

      <div className="App">
        <Header />
        <Search onSearchSubmit={(q) => this.onSearchHandler(q)} />
        {error && <p style={{ color: "red" }}>pokemon not found</p>}
        <Pokedex pokemon={pokemon} />
        <Randomize onSearchSubmit={(q) => this.onSearchHandler(q)}/>
      </div>
    );
  }
}

export default App;
