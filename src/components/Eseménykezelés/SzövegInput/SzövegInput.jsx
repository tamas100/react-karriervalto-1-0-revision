import React, { Component } from 'react'
import './SzövegInput.css';

export default class SzövegInput extends Component {

    handleChange = (e) => {
        this.props.handleTitleUpdate(e.target.value);
    }
    
    handleSubmit= (e) => {
        e.preventDefault();
    }

  render() {

    return (
    <>
        <form action="#"
              method='GET' 
              className='szöveg-input-form' 
              onSubmit={this.handleSubmit}>            
            <input type="text"
                name="input-kulcs"
                className='szöveg-input'
                value={this.props.inputValue}
                onChange={this.handleChange} />
        </form>
      </>
    )
  }
}
