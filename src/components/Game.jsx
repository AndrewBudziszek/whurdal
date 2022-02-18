import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

function Game() {
    let [currentGuess, setCurrentGuess] = useState(['W', 'H', 'E', 'A', 'T']);
    let [tries, setTries] = useState(['W', 'H', 'E', 'A', 'T']);
    let [triesState, setTriesState] = useState([])
    let absentBoxClassName = 'inline-flex justify-center align-center leading-8 outline outline-3 outline-gray-700 h-12 w-12 uppercase text-white font-bold p-2'
    let correctBoxClassName = '';
    let presentBoxClassName = ''
    return (
        <>
            <div className="grid py-6 place-items-center">
                {
                    tries.map((a) => {
                        return (
                            <div className="container inline-grid grid-cols-5 w-1/4 pb-6 place-items-center">
                                {
                                    currentGuess.map(letter => {
                                        return (
                                            <div className={absentBoxClassName}>{letter}</div>
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