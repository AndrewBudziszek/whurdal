import React, { useContext } from 'react';
import { getTodaysWord, getDaysSinceBeginning } from '../assets/wordList';
import { GameContext } from './GameContext';
import {toast} from 'react-toastify'


function ShareButton() {
    const { tries, currentGuessIndex } = useContext(GameContext);

    return (
        <div>
            <button
                className='bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded'
                onClick={() => {
                    navigator.clipboard.writeText(generateShareSnippet(tries, currentGuessIndex));
                    toast('📋 Copied results to clipboard!')
                }}
            >
                Share
            </button>
        </div>
    )
}

function generateShareSnippet(tries, currentGuessIndex) {    
    let shareSnippet = `Whurdal ${getDaysSinceBeginning() + 1} ${currentGuessIndex}/6 \n\n`;
    let greenSquare = '🟩'
    let blackSquare = '⬛'
    let yellowSquare = '🟨';
    const todaysWord = getTodaysWord();

    for (let i = 0; i < currentGuessIndex; i++) {
        for (let j = 0; j < tries[i].length; j++) {
            if (tries[i][j] === todaysWord[j]) {
                shareSnippet += greenSquare;
            } else if (todaysWord.includes(tries[i][j])) {
                shareSnippet += yellowSquare;
            } else {
                shareSnippet += blackSquare;
            }
        }
        shareSnippet += '\n';
    }

    return shareSnippet;
}

export default ShareButton;