import React, { Component } from 'react'
import "./Pokedex.scss";

class Pokedex extends Component {
  render() {
    let { pokemon } = this.props

    return (
      <div className="middle-content">
        <div className="pokedex">
          <div className="screen-left">
            <div className="screen-left__header">
              <div className="big"></div>
              <div className="little">
                <div className="red"></div>
                <div className="yellow"></div>
                <div className="green"></div>
              </div>
            </div>
            <div className="screen-left__middle-content">
              <div className="white-border">
                <div className="green-screen">
                  {
                    pokemon.id ? 
                    <img src={ pokemon.sprites.other["official-artwork"].front_default } className="artwork" alt="Artwork" />
                    :
                    null 
                }
                </div>
              </div>
            </div>
            <div className="screen-left__bottom-content">
              <div className="circle">
                <div></div>
              </div>
              <div className="square">
                <div></div>
              </div>
              <div className="buttons">
                <div className="top">
                  <div></div>
                </div>
                <div className="middle">
                  <div className="left"></div>
                  <div></div>
                  <div className="right"></div>
                </div>
                <div className="bottom">
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="screen-right">
            <p>
              {
                Object.keys(pokemon).length > 0 && pokemon.name
              }
            </p>
            <p>
              {
                Object.keys(pokemon).length > 0 && `${pokemon.height} Feet`
              }
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Pokedex;
