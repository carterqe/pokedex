import React, { Component } from 'react'
import './Randomize.scss'

class Randomize extends Component {
    constructor() {
        super ()
        this.state = {
            query: ""
        }
    }

    makeRandomNumber = () => {
        
        let rand = Math.floor((Math.random() * 898) + 1)
        this.props.onSearchSubmit(rand)
    }


    render() {
        return(
            <div className="dice-container">
                <img 
                    className="dice"
                    src="https://dejpknyizje2n.cloudfront.net/marketplace/products/pixel-art-dice-8bit-game-icon-sticker-1599786770.4739149.png"
                    onClick={this.makeRandomNumber}
                    alt="random"
                />
                <p>Randomize</p>
            </div>
        )
    }

}

export default Randomize