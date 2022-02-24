import React, { useState } from 'react';

function Game() {
    let [currentGuess, setCurrentGuess] = useState(['W', 'H', 'E', 'A', 'T']);
    let [tries, setTries] = useState(['W', 'H', 'E', 'A', 'T']);
    let [triesState, setTriesState] = useState([])
    let absentBoxClassName = 'inline-flex justify-center content-center border-2 border-gray-700 h-12 w-12 uppercase text-white font-bold p-2'
    let correctBoxClassName = '';
    let presentBoxClassName = ''
    return (
        <>
            <div className="grid pt-5 place-items-center max-w-screen-lg m-auto">
                {
                    tries.map((a) => {
                        return (
                            <div className="inline-grid grid-cols-5 gap-5 pb-2 place-items-center">
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