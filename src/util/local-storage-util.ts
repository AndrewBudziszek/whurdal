import { getTodaysWord } from '../assets/wordList';

function getLocalStorageItem(key: string): any {
    if(JSON.parse(localStorage.getItem('todaysWord')!) !== getTodaysWord()) {
        initializeLocalStorage();
    }
    console.log(`Getting ${key} from local storage`);
    const saved = localStorage.getItem(key);
    return JSON.parse(saved!);
}

function initializeLocalStorage(): void {
    console.log('Initializing Local Storage');
    const todaysWord = getTodaysWord();
    const storedWord = JSON.parse(localStorage.getItem('todaysWord')!);
    if (storedWord !== todaysWord || todaysWord === null) {
        console.log('No/Old Word Found... Resetting game...')
        localStorage.removeItem('inProgress');
        localStorage.removeItem('tries');
        localStorage.removeItem('currentGuessIndex');
        localStorage.setItem('todaysWord', JSON.stringify(todaysWord));
        console.log('Game reset!')
    }
}

export { getLocalStorageItem, initializeLocalStorage };