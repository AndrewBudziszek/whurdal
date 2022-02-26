import React, { useContext, useRef } from 'react';
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
  const keyboard = useRef();
  const { currentGuessIndex, setCurrentGuessIndex, tries, setTries } = useContext(GameContext);
  let index = 0;

  function onChange(input) {
    console.log('onChange Called', input, index, currentGuessIndex, tries);
    let cloneTries = [...tries];

    if (input.length <= 5) {
      while (input.length < 5) {
        input += ' ';
      }
      cloneTries[currentGuessIndex] = input;
      setTries(cloneTries);
    } else {
      keyboard.current.setInput(input.substr(0, 5))
      cloneTries[currentGuessIndex] = input.substr(0, 5);
      setTries(cloneTries);
    }
  }

  function onKeyPress(input) {
    if (input === '{ent}') {
      if (validGuess()) {
        setCurrentGuessIndex(currentGuessIndex + 1)
        keyboard.current.setInput('')
        index++;
        setTries(tries);
      } else {
        console.log('Submitted INVALID guess')
      }
    }
  }

  function validGuess() {
    return tries[currentGuessIndex].replaceAll(' ', '').length === 5
  }

  return (
    <div className="max-w-screen-sm	m-auto">
      <Keyboard
        keyboardRef={r => (keyboard.current = r)}
        layout={layout}
        display={display}
        mergeDisplay={true}
        onChange={e => onChange(e)}
        onKeyPress={e => onKeyPress(e)}
      />
    </div>
  )
}

export default GameKeyboard;