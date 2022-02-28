import React from 'react';
import ShareButton from './ShareButton';

function GameCompleteModal() {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg text-white max-w-screen-sm m-auto border-2">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Statistics</div>
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
            <ShareButton />
        </div>
    )
}

export default GameCompleteModal;