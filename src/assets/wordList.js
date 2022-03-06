var luxon = require('luxon'); 
const sowpods = require('pf-sowpods');

const wordList = [
    'KNIFE',
    'YOUTH',
    'UNION',
    'HAVOC',
    'DRAMA',
    'ABOUT',
    'INDEX',
    'BRAVO',
    'MAGIC',
    'PEACH',
    'FUDGE',
    'STICK',
    'WRONG',
    'SHARP',
    'FAULT',
    'GRIFT',
    'VOICE',
    'CRYPT',
    'FAITH',
    'CHEAP',
    'ABOVE',
    'ALOHA',
    'STUDY',
    'SUPER',
    'LAYER',
    'SUGAR',
    'FORTE',
    'SPANK',
    'DELTA',
    'MUSIC',
    'CHEWY',
    'NOISE',
    'DILDO',
    'BLOCK',
    'APPLE',
    'WASTE',
    'THEME',
    'LIGHT',
    'ABUSE',
    'TONES',
    'WHITE',
    'ALIKE',
    'UPSET',
    'COURT',
    'QUEEN',
    'PRIDE',
    'WRITE',
    'VIDEO',
    'URBAN',
    'SHOCK',
    'NORTH',
    'GRAND',
    'SPITE',
    'SMITE',
    'GIANT',
    'THETA',
    'POWER',
    'DOUBT',
    'DRAFT',
    'RAISE',
    'FRESH',
    'ERROR',
    'RAPID',
    'GRATZ',
    'VAGUE',
    'POUND',
    'AWFUL',
    'CREAM',
    'CRAZY',
    'JUDGE',
    'CHONK',
    'CIRCA',
    'PRIME',
    'THICK',
    'SCENE',
    'PIANO',
    'EXTRA',
    'UNITY',
    'CHIEF',
    'WORLD',
    'ORDER',
    'BITCH',
    'SHANK',
    'VALOR',
];

let nonSowpodsAcceptedWords = ['CHONK', 'GRATZ'];

export function verifyWordsInList() {
    let rejectedWords = [];
    let words = [];
    for(let i = 0; i < wordList.length; i++) {
        if(words.includes(wordList[i])) {
            rejectedWords.push(wordList[i] + ' DUPLICATE')
        }
        words.push(wordList[i])
        if(!wordIsValid(wordList[i])) {
            rejectedWords.push(wordList[i])
        }
    }
    
    return rejectedWords;
}

export function wordIsValid(word) {
    word = word.toUpperCase();
    return (sowpods.verify(word) || nonSowpodsAcceptedWords.includes(word)) && word.length === 5;
}

export function getDaysSinceBeginning() {
    const startDate = luxon.DateTime.local(2022, 2, 26);
    const daysSince = luxon.Interval.fromDateTimes(startDate, luxon.DateTime.local());
    const daysSinceInt = parseInt(daysSince.length('days'));

    return daysSinceInt;
}

export function getTimeUntilTomorrow() {
    let rightNow = luxon.DateTime.local();
    let tomorrow = luxon.DateTime.local().plus({days:1}).startOf('day');

    return tomorrow.diff(rightNow).toFormat('hh:mm:ss');
}

export function getTodaysWord() {
    let daysSinceBeginning = getDaysSinceBeginning();
    return wordList[daysSinceBeginning];
}
