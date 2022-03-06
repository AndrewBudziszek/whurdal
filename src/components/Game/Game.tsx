import { lazy, useContext, Suspense } from 'react';
import { GameContext } from '../GameContext';
import GameTiles from './GameTiles';
import GameKeyboard from './GameKeyboard';

const GameCompleteModal = lazy(() => import('./GameCompleteModal/GameCompleteModal'));

function Game() {
  const { inProgress } = useContext(GameContext);

  return (
    <>
      <div className='grid grid-cols-3'>
        <div className='col-span-3'>
          <GameTiles />
        </div>
        <div className='col-span-3'>
          {!inProgress ?
            <>
              <Suspense fallback={<>Loading...</>}>
                <GameCompleteModal />
              </Suspense>
            </>
            : <GameKeyboard />}
        </div>
      </div>
    </>
  )
}

export default Game;