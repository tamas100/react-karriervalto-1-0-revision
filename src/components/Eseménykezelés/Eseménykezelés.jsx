import React, { Component } from 'react'
import './Eseménykezelés.css'

export default class Eseménykezelés extends Component {
    
    state = {
        klikkekSzáma: 0
    }

    handleClick = () => {
        console.log('handleClick');
        this.setState({ klikkekSzáma: this.state.klikkekSzáma + 1 });
    }

    render() {
        return (
        <div className='event-sandbox' onClick={this.handleClick}>
            {this.props.szöveg} {this.state.klikkekSzáma}
        </div>
    )
  }
}
