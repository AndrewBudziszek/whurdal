import React, { useContext } from 'react';
import { GameContext } from './GameContext';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

const layout = {
  default:
    [
      "Q W E R T Y U I O P",
      "A S D F G H J K L",
      "{ent} Z X C V B N M {backspace}",
    ]
}

const display = {
  "{ent}": "ENTER",
  "{backspace}": "⌫",
}


function GameKeyboard() {
  const {setCurrentGuess, setTries} = useContext(GameContext);

  return (
    <div className="max-w-screen-sm	m-auto">
      <Keyboard layout={layout} display={display} mergeDisplay={true} />
    </div>
  )
}

export default GameKeyboard;