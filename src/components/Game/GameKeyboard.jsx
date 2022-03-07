import { useContext, useRef, useEffect } from 'react';
import { GameContext } from '../GameContext';
import { getTodaysWord, wordIsValid } from '../../assets/wordList';
import { toast } from 'react-toastify';
import Keyboard from 'react-simple-keyboard';
import axios from 'axios';
import 'react-simple-keyboard/build/css/index.css';

const layout = {
  default:
    [
      "Q W E R T Y U I O P",
      "{space} A S D F G H J K L {space}",
      "{ent} Z X C V B N M {backspace}",
    ]
};

const display = {
  "{ent}": "enter",
  "{backspace}": "⌫ bs",
};

let absentKeys = "";
let presentKeys = "";
let correctKeys = "";

function GameKeyboard() {
  const keyboard = useRef();
  const { currentGuessIndex, updateCurrentGuessIndex, tries, setNewTries, toggleInProgress } = useContext(GameContext);

  useEffect(() => {
    // Setup Digital Keyboard
    updateKeys();
  });

  function onChange(input) {
    let cloneTries = [...tries];

    if (input.charAt(input.length - 1) !== ' ') {
      while (input.length < 5) {
        input += ' ';
      }

      if(input.length > 5) keyboard.current.setInput(input.substr(0, 5));
      cloneTries[currentGuessIndex] = input.substr(0, 5);
      setNewTries(cloneTries);
    } else {
      keyboard.current.setInput(input.trim())
    }
  }

  function onKeyPress(input) {
    if (input === '{ent}') {
      if (validGuess(tries[currentGuessIndex])) {
        axios.put('https://413tj2e8b5.execute-api.us-east-1.amazonaws.com/prod/', { "lookupID": "guesses" });
        if (tries[currentGuessIndex] === getTodaysWord()) {
          completeGame();
        } else {
          updateCurrentGuessIndex(currentGuessIndex + 1)
          localStorage.setItem('currentGuessIndex', JSON.stringify(currentGuessIndex + 1));
          if (currentGuessIndex === 5) {
            //Record Loss
            axios.put('https://413tj2e8b5.execute-api.us-east-1.amazonaws.com/prod/', { "lookupID": "losses" });
          }
          keyboard.current.setInput('')
          localStorage.setItem('tries', JSON.stringify(tries));
          setNewTries(tries);
        }
      }
    }
  }

  function completeGame() {
    toggleInProgress(false);
    updateCurrentGuessIndex(currentGuessIndex + 1);
    localStorage.setItem('currentGuessIndex', JSON.stringify(currentGuessIndex + 1));
    localStorage.setItem('inProgress', false);
    localStorage.setItem('tries', JSON.stringify(tries));
    axios.put('https://413tj2e8b5.execute-api.us-east-1.amazonaws.com/prod/', { "lookupID": "wins" });
    keyboard.current.destroy();
    toast('🎉 Terrific! 🎉');
  }

  function validGuess(word) {
    if (word.replaceAll(' ', '').length < 5) {
      toast('❌ Word is too short ❌');
      return false;
    } else if (!wordIsValid(word)) {
      toast('❌ Not in word list ❌');
      return false;
    }

    return true;
  }

  function updateKeys() {
    console.log('Updating keys...');
    const todaysWord = getTodaysWord();
    for (var word = 0; word < currentGuessIndex; word++) {
      let input = tries[word];
      for (let i = 0; i < input.length; i++) {
        if (!`${absentKeys} ${correctKeys}`.includes(input[i])) {
          presentKeys.replace(input[i], '');
          if (input[i] === todaysWord[i]) {
            correctKeys += input[i] + ' ';
          } else if (todaysWord.includes(input[i])) {
            presentKeys += input[i] + ' ';
          } else {
            absentKeys += input[i] + ' ';
          }
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
        physicalKeyboardHighlightPress={true}
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