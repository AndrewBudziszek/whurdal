import { getTodaysWord } from '../assets/wordList';

function getLocalStorageItem(key: string) : String {
    const saved = localStorage.getItem(key);
    return JSON.parse(saved!);
}

function initializeLocalStorage() : void {
    let todaysWord = getTodaysWord();
    if(getLocalStorageItem('todaysWord') !== todaysWord) {
        localStorage.removeItem('inProgress');
        localStorage.removeItem('tries');
        localStorage.removeItem('currentGuessIndex');
        localStorage.setItem('todaysWord', JSON.stringify(todaysWord));
    }
}

export { getLocalStorageItem, initializeLocalStorage }