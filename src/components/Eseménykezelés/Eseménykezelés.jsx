import React, {useState} from 'react'
import './Eseménykezelés.css'

export default function Eseménykezelés(props) {
    const [klikkekSzáma, setKlikkekSzáma] = useState(0);
  
    const handleClick = () => {        
        setKlikkekSzáma(régiKlikkek => régiKlikkek + 1);        
    }
    
    return (
        <div className='event-sandbox' onClick={handleClick}>
            {props.szöveg} {klikkekSzáma}
        </div>
    )
  
}
