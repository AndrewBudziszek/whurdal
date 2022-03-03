import { createContext, useState, FC } from "react";
import { getLocalStorageItem } from '../util/local-storage-util';

interface GameContextInterface {
    currentGuessIndex: number;
    tries: string[];
    inProgress: boolean;
    updateCurrentGuessIndex?: (currentGuessIndex: number) => void;
    setNewTries?: (tries: string[]) => void;
    toggleInProgress?: (inProgress: boolean) => void;
}

const defaultState: GameContextInterface = {
    currentGuessIndex: getLocalStorageItem('currentGuessIndex') || 0,
    tries: getLocalStorageItem('tries') || ['     ', '     ', '     ', '     ', '     ', '     '],
    inProgress: getInProgressFromLocalStorage(),
}

function getInProgressFromLocalStorage(): boolean {
    const inProgressItem = getLocalStorageItem('inProgress');
    return inProgressItem === 'true' || inProgressItem === null ? true : false;
}

export const GameContext = createContext<GameContextInterface>(defaultState);

export const GameContextProvider: FC = ({ children }) => {
    let [currentGuessIndex, setCurrentGuessIndex] = useState<number>(defaultState.currentGuessIndex);
    let [tries, setTries] = useState<string[]>(defaultState.tries);
    let [inProgress, setInProgress] = useState<boolean>(defaultState.inProgress);

    const updateCurrentGuessIndex = (currentGuessIndex: number) => {
        setCurrentGuessIndex(currentGuessIndex);
    }

    const setNewTries = (tries: string[]) => {
        setTries(tries);
    }

    const toggleInProgress = (inProgress: boolean) => {
        setInProgress(inProgress);
    }

    return (
        <GameContext.Provider value={{ currentGuessIndex, updateCurrentGuessIndex, tries, setNewTries, inProgress, toggleInProgress }}>
            {children}
        </GameContext.Provider>
    )
}