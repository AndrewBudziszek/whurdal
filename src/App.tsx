import React, { useState } from 'react';
import Header from './components/Header'
import Game from './components/Game'
import './App.css';
import GameKeyboard from './components/GameKeyboard';
import { GameContext } from './components/GameContext';


function App() {
  let [currentGuessIndex, setCurrentGuessIndex] = useState(0);
  let [tries, setTries] = useState(['     ', '     ', '     ', '     ', '     ', '     ']);

  return (
    <div className="App place-content-center h-screen">
      <Header />
      <GameContext.Provider value={{currentGuessIndex, setCurrentGuessIndex, tries, setTries}}>
        <div className='grid grid-cols-3'>
          <div className='col-span-3'>
            <Game />
          </div>
          <div className='col-span-3'>
            <GameKeyboard />
          </div>
        </div>
      </GameContext.Provider>
    </div>
  );
}

export default App;
