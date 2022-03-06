import React from 'react';
import Header from './components/Header'
import { ToastContainer, Flip } from 'react-toastify';
import { GameContextProvider } from './components/GameContext';
import 'react-toastify/dist/ReactToastify.css';
import Game from './components/Game/Game';

function App() {
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
        <GameContextProvider>
          <Game />
        </GameContextProvider>
      </div> 
  );
}

export default App;
