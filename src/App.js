import React, { useState } from 'react';
import './App.css';
import HelloMessage from './components/HelloMessage/HelloMessage';
import TypeMessage from './components/TypeMessage/TypeMessage';
import ConditionalRender from './components/ConditionalRender/ConditionalRender';
import HelloMessageH2 from './components/HelloMessageH2/HelloMessageH2';
import TextSection from './components/TextSection/TextSection';
import App2 from './components/App2/App2';
import User from './components/User/User';
import Osszeg from './components/Osszeg/Osszeg';
import TicTacToe from './components/TicTacToe/TicTacToe';
import FlashCards from './components/FlashCards/FlashCards';
import Eseménykezelés from './components/Eseménykezelés/Eseménykezelés';
import SzövegInput from './components/Eseménykezelés/SzövegInput/SzövegInput';
import Userlist from './components/Eseménykezelés/UserList/Userlist';

const record = {
  a: 1,
  b: 2,
};

function callback(e) {
  e.preventDefault();
}
export default function App() {
  const [title, setTitle] = useState("Főcím");

  return (
    <div className="App">
      <h2 className='szöveg-h2'>{title}</h2>
      <SzövegInput handleTitleUpdate={setTitle} inputValue={title} />
      <Eseménykezelés szöveg={title} />
      <Userlist />
      <FlashCards />
      <App2 />
      <HelloMessageH2 message='“Hello, React!”' />
      <TextSection title="React" text="Paragraph text" />
      <User name="WallStreet Joe" email="troll@revenge-trading.com" />
      <Osszeg num1={8} num2={15} />
      <Osszeg num1={8} num2="text" />
      <TicTacToe />
      <HelloMessage name="Bill" />
      <HelloMessage name="Monica" />
      <HelloMessage name="Donald" />
      <HelloMessage name="Joe" />
      <TypeMessage val="Ez egy szöveg" />
      <TypeMessage val={5} />
      <TypeMessage val={5n} />
      <TypeMessage val={5 > 3} />
      <TypeMessage val={Symbol()} />
      <TypeMessage val={undefined} />
      <TypeMessage val={[1, 2, 3]} />
      <TypeMessage val={{ backgroundColor: "red", color: "black" }} />
      <TypeMessage val={record} />
      <TypeMessage val={callback} />
      <TypeMessage
        val={(e) => {
          e.preventDefault();
        }}
      />
      <ConditionalRender left={5} right={2} />
    </div>
  );

}

