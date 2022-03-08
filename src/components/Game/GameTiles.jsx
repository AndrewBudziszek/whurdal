import { useContext } from 'react';
import { GameContext } from '../GameContext';
import { getTodaysWord } from '../../assets/wordList';

function GameTiles() {
    const { currentGuessIndex, tries, inProgress } = useContext(GameContext)
    const todaysWord = getTodaysWord();
    const baseClass = 'inline-flex justify-center content-center border-2 h-16 w-16 uppercase text-white font-bold p-2 text-4xl sm:h-20 sm:w-20 sm:p-4 sm:border-4 '
    const currentClassName = baseClass + 'border-stone-500';
    const absentBoxClassName = baseClass + 'border-stone-700 bg-stone-700';
    const presentBoxClassName = baseClass + 'border-yellow-700 bg-yellow-700';
    const correctBoxClassName = baseClass + 'border-green-700 bg-green-700';
    const gameOverAbsentClassName = baseClass + 'bg-stone-700 border-red-700 border-4';
    const gameOverPresentClassName = baseClass + 'bg-yellow-700 border-red-700 border-4';
    const gameOverCorrectClassName = baseClass + 'bg-green-700 border-red-700 border-4';

    return (
        <div className="grid pt-5 place-items-center m-auto">
            {
                tries.map((gameTry, tryIndex) => {
                    if(!inProgress) {
                        if(gameTry.replaceAll(' ', '').length === 0) {
                            return null;
                        }
                    }
                    let lettersRemaining = todaysWord;
                    var lettersToRemove = [];
                    for(var k = 0; k < todaysWord.length; k++) {
                        if(todaysWord[k] === gameTry[k]) lettersToRemove.push(todaysWord[k]);
                    }
                    for(var p = 0; p < lettersToRemove.length; p++) {
                        lettersRemaining = lettersRemaining.replace(lettersToRemove[p], '');
                    }
                    return (
                        <div key={tryIndex} className="inline-grid grid-cols-5 gap-5 pb-2 place-items-center">
                            {
                                gameTry.split('').map((letter, i) => {
                                    let tileClassName = currentClassName;
                                    let gameOverRow = tryIndex === 5 && tries.length > 6;
                                    if (currentGuessIndex > 0 && tryIndex < currentGuessIndex) {
                                        if (todaysWord[i] === letter) {
                                            tileClassName = gameOverRow ? gameOverCorrectClassName : correctBoxClassName;
                                            lettersRemaining = lettersRemaining.replace(letter, '');
                                        } else if (todaysWord.includes(letter)) {
                                            if(!lettersRemaining.includes(letter)) {
                                                tileClassName = gameOverRow ? gameOverAbsentClassName: absentBoxClassName;
                                            } else {
                                                tileClassName = gameOverRow ? gameOverPresentClassName : presentBoxClassName;
                                                lettersRemaining = lettersRemaining.replace(letter, '');
                                            }
                                        } else {
                                            tileClassName = gameOverRow ? gameOverAbsentClassName: absentBoxClassName;
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
    )
}

export default GameTiles;