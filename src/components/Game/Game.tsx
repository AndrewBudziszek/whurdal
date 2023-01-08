import { lazy, useContext, Suspense } from 'react';
import { GameContext } from '../GameContext';
import GameTiles from './GameTiles';

const GameCompleteModal = lazy(() => import('./GameCompleteModal/GameCompleteModal'));
const GameKeyboard = lazy(() => import('./GameKeyboard'));

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
            <Suspense fallback={<>Loading...</>}>
              <GameCompleteModal />
            </Suspense>
            :
            <Suspense fallback={<>Loading...</>}>
              <GameKeyboard />
            </Suspense>
          }
        </div>
      </div>
    </>
  )
}

export default Game;