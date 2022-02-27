import React, { useContext } from 'react';
import { GameContext } from './GameContext';
import { getTodaysWord } from '../assets/wordList';


function Game() {
    let { currentGuessIndex, tries } = useContext(GameContext)
    let todaysWord = getTodaysWord();
    let absentBoxClassName = 'inline-flex justify-center content-center border-2 border-gray-700 h-16 w-16 uppercase text-white font-bold p-2 text-4xl';
    let presentBoxClassName = 'inline-flex justify-center content-center border-2 border-yellow-700 bg-yellow-700 h-16 w-16 uppercase text-white font-bold p-2 text-4xl';
    let correctBoxClassName = 'inline-flex justify-center content-center border-2 border-green-700 bg-green-700 h-16 w-16 uppercase text-white font-bold p-2 text-4xl';
    let gameOverFailedClassName = 'inline-flex justify-center content-center border-2 border-red-700 bg-red-700 h-16 w-16 uppercase text-white font-bold p-2 text-4xl';
    return (
        <>
            <div className="grid pt-5 place-items-center max-w-screen-lg m-auto">
                {
                    tries.map((gameTry, j) => {
                        return (
                            <div key={j} className="inline-grid grid-cols-5 gap-5 pb-2 place-items-center">
                                {
                                    gameTry.split('').map((letter, i) => {
                                        let tileClassName = absentBoxClassName;
                                        if(todaysWord.includes(letter) && currentGuessIndex > 0 && j < currentGuessIndex) {
                                            tileClassName = presentBoxClassName;
                                            if(todaysWord[i] === letter) {
                                                tileClassName = correctBoxClassName;
                                            }
                                        }
                                        if(j === 5 && tries.length > 6) {
                                            tileClassName = gameOverFailedClassName;
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