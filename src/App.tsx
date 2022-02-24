import React from 'react';
import Header from './components/Header'
import Game from './components/Game'
import './App.css';
import GameKeyboard from './components/GameKeyboard';

function App() {
  return (
    <div className="App place-content-center h-screen">
      <Header />
      <div>
        <Game />
        <GameKeyboard />
      </div>

    </div>
  );
}

export default App;
