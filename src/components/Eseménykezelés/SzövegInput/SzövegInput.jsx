import React from 'react'
import './SzövegInput.css';

export default function Szöveginput(props) {
  const handleChange = (e) => {
    props.handleTitleUpdate(e.target.value);
  }

  const handleSubmit= (e) => {
      e.preventDefault();
  }

  return (
    <>
        <form action="#"
              method='GET' 
              className='szöveg-input-form' 
              onSubmit={handleSubmit}>            
            <input type="text"
                name="input-kulcs"
                className='szöveg-input'
                value={props.inputValue}
                onChange={handleChange} />
        </form>
      </>
  )
}


