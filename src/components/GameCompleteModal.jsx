import React, { useContext } from 'react';
import { GameContext } from './GameContext';
import ShareButton from './ShareButton';

function GameCompleteModal() {
    const { tries, currentGuessIndex } = useContext(GameContext);

    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg text-white max-w-screen-sm m-auto">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Statistics</div>
                <div className='grid grid-cols-4'>
                    <div>
                        <div>1</div>
                        <div>Played</div>
                    </div>
                    <div>
                        <div>100</div>
                        <div>Win %</div>
                    </div>
                    <div>
                        <div>1</div>
                        <div>Current Streak</div>
                    </div>
                    <div>
                        <div>1</div>
                        <div>Max Streak</div>
                    </div>  
                </div>
            </div>
            <div className=''>

            </div>
            <ShareButton />
        </div>
    )
}

export default GameCompleteModal;