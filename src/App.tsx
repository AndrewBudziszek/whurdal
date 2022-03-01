import React, { useState } from 'react';
import Header from './components/Header'
import Game from './components/Game'
import GameKeyboard from './components/GameKeyboard';
import { GameContext } from './components/GameContext';
import { ToastContainer, Flip } from 'react-toastify';
import GameCompleteModal from './components/GameCompleteModal';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  let [currentGuessIndex, setCurrentGuessIndex] = useState(() => {
    const saved = localStorage.getItem('currentGuessIndex');
    const value = JSON.parse(saved!);
    return value || 0;
  });
  let [tries, setTries] = useState(() => {
    const saved = localStorage.getItem('tries');
    const value = JSON.parse(saved!);
    return value || ['     ', '     ', '     ', '     ', '     ', '     '];
  });
  let [inProgress, setInProgress] = useState(() => {
    const saved = localStorage.getItem('inProgress');
    const value = JSON.parse(saved!);
    if(value === null) return true;
    return value === 'true';
  });

  return (
    <div className="h-screen text-center">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Flip}
        />
      <Header />
      <GameContext.Provider value={{ currentGuessIndex, setCurrentGuessIndex, tries, setTries, setInProgress }}>
        <div className='grid grid-cols-3'>
          <div className='col-span-3'>
            <Game />
          </div>
          <div className='col-span-3'>
            {!inProgress ? <GameCompleteModal/> : <GameKeyboard />}
          </div>
        </div>
      </GameContext.Provider>
    </div>
  );
}

export default App;
