import { getTodaysWord } from '../assets/wordList';

function getLocalStorageItem(key: string): any {
    if(JSON.parse(localStorage.getItem('todaysWord')!) !== getTodaysWord()) {
        initializeLocalStorage();
    }

    const saved = localStorage.getItem(key);
    return JSON.parse(saved!);
}

function initializeLocalStorage(): void {
    const todaysWord = getTodaysWord();
    const storedWord = JSON.parse(localStorage.getItem('todaysWord')!);
    if (storedWord !== todaysWord || todaysWord === null) {
        localStorage.removeItem('inProgress');
        localStorage.removeItem('tries');
        localStorage.removeItem('currentGuessIndex');
        localStorage.setItem('todaysWord', JSON.stringify(todaysWord));
    }
}

export { getLocalStorageItem, initializeLocalStorage };