import React from "react";
import { PokedexControls, PokedexScreen } from "./components";
import "./Pokedex.scss";

const Pokedex = ({ results }) => (
  <div className="pokedex-container">
    <PokedexScreen results={results} />
    <PokedexControls results={results} />
  </div>
);

export default Pokedex;
