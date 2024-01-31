import React from 'react';
import './Row.css'
import Cell from '../Cell/Cell';

export default function Row({c1, c2, c3}) {
  return (
    <div className='row-container'>
      <Cell value={c1}/> <Cell value={c2}/> <Cell value={c3}/>
    </div>
  )
}
