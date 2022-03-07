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
                    return (
                        <div key={tryIndex} className="inline-grid grid-cols-5 gap-5 pb-2 place-items-center">
                            {
                                gameTry.split('').map((letter, i) => {
                                    let tileClassName = currentClassName;
                                    if (currentGuessIndex > 0 && tryIndex < currentGuessIndex) {
                                        if (todaysWord[i] === letter) {
                                            tileClassName = correctBoxClassName;
                                        } else if (todaysWord.includes(letter) && gameTry.substring(0, i).split(letter).length - 1 < todaysWord.split(letter).length - 1) {
                                            tileClassName = presentBoxClassName;
                                        } else {
                                            tileClassName = absentBoxClassName;
                                        }
                                    }
                                    if (tryIndex === 5 && tries.length > 6) {
                                        if (todaysWord[i] === letter) {
                                            tileClassName = gameOverCorrectClassName;
                                        } else if (todaysWord.includes(letter)) {
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
    )
}

export default GameTiles;