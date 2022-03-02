import React, { useState } from 'react';
import Header from './components/Header'
import Game from './components/Game'
import GameKeyboard from './components/GameKeyboard';
import { GameContext } from './components/GameContext';
import { ToastContainer, Flip } from 'react-toastify';
import GameCompleteModal from './components/GameCompleteModal';
import { getLocalStorageItem } from './util/local-storage-util';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  let [currentGuessIndex, setCurrentGuessIndex] = useState(() => {
    return getLocalStorageItem('currentGuessIndex') || 0;
  });
  let [tries, setTries] = useState(() => {
    return getLocalStorageItem('tries') || ['     ', '     ', '     ', '     ', '     ', '     '];
  });
  let [inProgress, setInProgress] = useState(() => {
    const inProgressItem = getLocalStorageItem('inProgress');
    return inProgressItem === 'true' || inProgressItem === null ? true : false;
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
