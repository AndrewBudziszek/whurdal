import React, { useState } from 'react';
import Header from './components/Header'
import Game from './components/Game'
import GameKeyboard from './components/GameKeyboard';
import ShareButton from './components/ShareButton';
import { GameContext } from './components/GameContext';
import './App.css';


function App() {
  let [currentGuessIndex, setCurrentGuessIndex] = useState(0);
  let [tries, setTries] = useState(['     ', '     ', '     ', '     ', '     ', '     ']);
  let [inProgress, setInProgress] = useState(true);

  return (
    <div className="App place-content-center h-screen">
      <Header />
      <GameContext.Provider value={{currentGuessIndex, setCurrentGuessIndex, tries, setTries, setInProgress}}>
        <div className='grid grid-cols-3'>
          <div className='col-span-3'>
            <Game />
          </div>
          <div className='col-span-3'>
            <GameKeyboard />
          </div>
        </div>
      {!inProgress ? <ShareButton/> : null}
      </GameContext.Provider>
    </div>
  );
}

export default App;
