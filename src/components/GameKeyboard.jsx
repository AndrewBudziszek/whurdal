import React, { useContext, useRef } from 'react';
import { GameContext } from './GameContext';
import Keyboard from 'react-simple-keyboard';
import { getTodaysWord, wordIsValid } from '../assets/wordList';
import 'react-simple-keyboard/build/css/index.css';
import { toast } from 'react-toastify';
import axios from 'axios';

const layout = {
  default:
    [
      "Q W E R T Y U I O P",
      "{space} A S D F G H J K L {space}",
      "{ent} Z X C V B N M {backspace}",
    ]
}

const display = {
  "{ent}": "enter",
  "{backspace}": "⌫ bs",
}

let absentKeys = ""
let presentKeys = ""
let correctKeys = ""

function GameKeyboard() {
  const keyboard = useRef();
  const { currentGuessIndex, setCurrentGuessIndex, tries, setTries, setInProgress } = useContext(GameContext);

  function onChange(input) {
    let cloneTries = [...tries];

    if(input.charAt(input.length - 1) !== ' ') {
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
    } else {
      keyboard.current.setInput(input.trim())
    }
  }

  function onKeyPress(input) {
    if (input === '{ent}') {
      if (validGuess()) {
        axios.put('https://413tj2e8b5.execute-api.us-east-1.amazonaws.com/prod/', {"lookupID":"guesses"});  
        if(tries[currentGuessIndex] === getTodaysWord()) {
          setInProgress(false);
          setCurrentGuessIndex(currentGuessIndex + 1)
          localStorage.setItem('inProgress', false);
          localStorage.setItem('tries', JSON.stringify(tries));
          localStorage.setItem('currentGuessIndex', JSON.stringify(currentGuessIndex + 1));
          toast('🎉 Terrific! 🎉')
          //Record win
          axios.put('https://413tj2e8b5.execute-api.us-east-1.amazonaws.com/prod/', {"lookupID":"wins"});  
          keyboard.current.destroy();
        } else {
          updateKeys(tries[currentGuessIndex]);
          setCurrentGuessIndex(currentGuessIndex + 1)
          localStorage.setItem('currentGuessIndex', JSON.stringify(currentGuessIndex + 1));
          if(currentGuessIndex === 5) {
            //Record Loss
            axios.put('https://413tj2e8b5.execute-api.us-east-1.amazonaws.com/prod/', {"lookupID":"losses"});  
          } 
          keyboard.current.setInput('')
          localStorage.setItem('tries', JSON.stringify(tries));
          setTries(tries);
        }
      } else {
        console.log('Submitted INVALID guess')
      }
    }
  }

  function validGuess() {
    if(!wordIsValid(tries[currentGuessIndex])) {
      toast('❌ Not in word list ❌');
      return false;
    }
    return tries[currentGuessIndex].replaceAll(' ', '').length === 5
  }

  function updateKeys(input) {
    for(let i = 0; i < input.length; i++) {
      if(!`${absentKeys} ${correctKeys}`.includes(input[i])) {
        presentKeys.replace(input[i], '');
        if(input[i] === getTodaysWord()[i]) {
          correctKeys += input[i] + ' ';
        } else if (getTodaysWord().includes(input[i])) {
          presentKeys += input[i] + ' ';
        } else {
          absentKeys += input[i] + ' ';
        }
      }    
    }
    keyboard.current.addButtonTheme(correctKeys, "hg-green");
    keyboard.current.addButtonTheme(presentKeys, "hg-yellow");
    keyboard.current.addButtonTheme(absentKeys, "hg-gray");
  }

  return (
    <div className="max-w-screen-sm	m-auto">
      <Keyboard
        keyboardRef={r => (keyboard.current = r)}
        theme={"hg-theme-default myTheme1"}
        layout={layout}
        display={display}
        mergeDisplay={true}
        onChange={e => onChange(e)}
        onKeyPress={e => onKeyPress(e)}
        buttonAttributes={
          [
            {
              attribute: "disabled",
              value: "true",
              buttons: "{space}"
            }
          ]
        }
      />
    </div>
  )
}

export default GameKeyboard;