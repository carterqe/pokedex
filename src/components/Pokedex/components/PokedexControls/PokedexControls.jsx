import React from "react";
import "./PokedexControls.scss";

const PokedexControls = ({ results }) => {

  // console.log(results);

  return (
    <div className="controls">
      <p>
        {
          Object.keys(results).length > 0 && results.name
        }
      </p>
      <p>
        {
          Object.keys(results).length > 0 && `${results.height} Feet`
        }
      </p>
    </div>
  )
};

export default PokedexControls;
