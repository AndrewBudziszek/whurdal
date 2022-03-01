import React, { useContext } from 'react';
import { GameContext } from './GameContext';
import { getTodaysWord } from '../assets/wordList';


function Game() {
    let { currentGuessIndex, tries } = useContext(GameContext)
    let todaysWord = getTodaysWord();
    let baseClass = 'inline-flex justify-center content-center border-2 h-16 w-16 uppercase text-white font-bold p-2 text-4xl '
    let currentClassName = baseClass + 'border-gray-700';
    let absentBoxClassName = baseClass + 'border-stone-700 bg-stone-700';
    let presentBoxClassName = baseClass + 'border-yellow-700 bg-yellow-700';
    let correctBoxClassName = baseClass + 'border-green-700 bg-green-700';
    let gameOverAbsentClassName = baseClass + 'bg-stone-700 border-red-700 border-4';
    let gameOverPresentClassName = baseClass + 'bg-yellow-700 border-red-700 border-4';
    let gameOverCorrectClassName = baseClass + 'bg-green-700 border-red-700 border-4';

    return (
        <>
            <div className="grid pt-5 place-items-center max-w-screen-lg m-auto">
                {
                    tries.map((gameTry, tryIndex) => {
                        return (
                            <div key={tryIndex} className="inline-grid grid-cols-5 gap-5 pb-2 place-items-center">
                                {
                                    gameTry.split('').map((letter, i) => {
                                        let tileClassName = currentClassName;
                                        if(currentGuessIndex > 0 && tryIndex < currentGuessIndex) {
                                            if(todaysWord[i] === letter) {
                                                tileClassName = correctBoxClassName;
                                            } else if(todaysWord.includes(letter)) {
                                                tileClassName = presentBoxClassName;
                                            } else {
                                                tileClassName = absentBoxClassName;
                                            }
                                        }
                                        if(tryIndex === 5 && tries.length > 6) {
                                            if(todaysWord[i] === letter) {
                                                tileClassName = gameOverCorrectClassName;
                                            } else if(todaysWord.includes(letter)) {
                                                tileClassName = gameOverPresentClassName;
                                            } else {
                                                tileClassName = gameOverAbsentClassName;
                                            }
                                        }
                                        return (
                                            <div key={i} className={tileClassName}>{letter}</div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </>



    )
}

export default Game;