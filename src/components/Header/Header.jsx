import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <img
          className="pokeball"
          src="https://pngimg.com/uploads/pokeball/pokeball_PNG21.png"
          alt="pokeball"
        />
        <img
          className="pokemon-title"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
          alt="title"
        />
      </header>
    );
  }
}

export default Header;
