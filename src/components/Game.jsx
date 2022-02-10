import React, { useState } from 'react';

function Game() {
    let [currentGuess, setCurrentGuess] = useState(['W', 'H', 'E', 'A', 'T']);
    let [tries, setTries] = useState(['W', 'H', 'E', 'A', 'T']);
    let [triesState, setTriesState] = useState([])
    let boxClassName = 'outline outline-3 outline-gray-700 h-10 w-10 uppercase text-white font-bold p-2'
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
                                            <div className={boxClassName}>{letter}</div>
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