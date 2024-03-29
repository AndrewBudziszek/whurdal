import { useContext, useState, useEffect } from 'react';
import { getTodaysWord, getDaysSinceBeginning, getTimeUntilTomorrow } from '../../../assets/wordList';
import { GameContext } from '../../GameContext';
import { toast } from 'react-toastify';
import ShareIcon from '@heroicons/react/outline/ShareIcon';
import axios from 'axios';


function ShareButton() {
    const { tries, currentGuessIndex } = useContext(GameContext);
    const buttonClassName = 'bg-green-700 hover:bg-green-900 text-white font-bold inline-flex items-center px-3 py-2 rounded text-2xl';
    const [currentTimeRemaining, setCurrentTimeRemaining] = useState(getTimeUntilTomorrow())

    useEffect(() => {
        setInterval(() => {
            setCurrentTimeRemaining(getTimeUntilTomorrow());
        }, 1000)
    }, [currentTimeRemaining]);

    return (
        <>
            <div className='grid grid-cols-2 inline-flex items-center'>
                <div>
                    <div className='uppercase font-bold text-2xl'>
                        Next Whurdal
                    </div>
                    <div className='uppercase text-4xl'>
                        {currentTimeRemaining}
                    </div>
                </div>
                <div>
                    <button
                        className={buttonClassName}
                        onClick={() => {
                            //Record share
                            axios.put('https://413tj2e8b5.execute-api.us-east-1.amazonaws.com/prod/', {"lookupID":"shares"});  
                            navigator.clipboard.writeText(generateShareSnippet(tries, currentGuessIndex));
                            toast('📋 Copied results to clipboard!')
                        }}
                    >
                        Share <ShareIcon className='h-6 pl-1' />
                    </button>
                </div>
            </div>
        </>
    )
}

function generateShareSnippet(tries: string[], currentGuessIndex: number): string {
    let shareSnippet = `Whurdal ${getDaysSinceBeginning() + 1} ${currentGuessIndex}/6 \n\n`;
    const greenSquare = '🟩'
    const blackSquare = '⬛'
    const yellowSquare = '🟨';
    const redSquare = '🟥';
    const todaysWord = getTodaysWord();

    for (let i = 0; i < currentGuessIndex; i++) {
        for (let j = 0; j < tries[i].length; j++) {
            if (tries.length > 6 && i === 5) {
                shareSnippet += redSquare
            } else {
                if (tries[i][j] === todaysWord[j]) {
                    shareSnippet += greenSquare;
                } else if (todaysWord.includes(tries[i][j])) {
                    shareSnippet += yellowSquare;
                } else {
                    shareSnippet += blackSquare;
                }
            }
        }
        shareSnippet += '\n';
    }

    return shareSnippet;
}

export default ShareButton;