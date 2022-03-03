import React, { useContext } from 'react';
import { GameContext } from '../GameContext';
import GameTiles from './GameTiles';
import GameCompleteModal from './GameCompleteModal/GameCompleteModal';
import GameKeyboard from './GameKeyboard';

function Game() {
  const { inProgress } = useContext(GameContext)

  return (
    <>
      <div className='grid grid-cols-3'>
        <div className='col-span-3'>
          <GameTiles />
        </div>
        <div className='col-span-3'>
          {!inProgress ? <GameCompleteModal open={true} /> : <GameKeyboard />}
        </div>
      </div>
    </>
  )
}

export default Game;