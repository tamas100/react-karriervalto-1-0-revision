import React from 'react';
import './TicTacToe.css'
import Row from './Row/Row';

export default function TicTacToe() {
  const board = [
    <Row c1="X  " c2={null} c3={null}/>,
    <Row c1="O  " c2="O  " c3="X  "/>,
    <Row c1="X  " c2={null} c3={null}/>
  ]
   
  return (
    <div className='ttt-container'>
      {board}
    </div>
  )
}

