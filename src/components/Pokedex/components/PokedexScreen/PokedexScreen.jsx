import React from "react";
import "./PokedexScreen.scss";

const PokedexScreen = ({ results }) => {
  
  let img = null;

  if (Object.keys(results).length > 0) {
    img = results.sprites.other['official-artwork'].front_default;
  }

  return (
    <div className="screen">
      {
        img && <img src={ img } className="artwork" alt="Artwork" />
      }
    </div>
  )
};

export default PokedexScreen;
