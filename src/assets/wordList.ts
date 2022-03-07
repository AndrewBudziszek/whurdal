import { DateTime, Interval } from 'luxon';
import { verify } from 'whurdal-word-verifier';
import dictionary from 'whurdal-word-verifier/lib';

const wordList: string[] = [
    'KNIFE',
    'YOUTH',
    'UNION',
    'HAVOC',
    'DRAMA',
    'ABOUT',
    'INDEX',
    'BRAVO',
    'MAGIC',
    'CLASH',
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
    'POINT'
];

let nonSowpodsAcceptedWords: string[] = ['CHONK', 'GRATZ'];

export function verifyWordsInList(): string[] | null {
    let rejectedWords: string[] = [];
    let words: string[] = [];
    for (let i = 0; i < wordList.length; i++) {
        if (words.includes(wordList[i])) {
            rejectedWords.push(wordList[i] + ' DUPLICATE')
        }
        // Reject any words with 3 dupe letters
        for(const letter of wordList[i]) {
            if(wordList[i].split(letter).length > 3) {
                rejectedWords.push(wordList[i]);
                break;
            }
        }
        words.push(wordList[i])
        if (!wordIsValid(wordList[i])) {
            rejectedWords.push(wordList[i])
        }
    }

    return rejectedWords;
}

export function wordIsValid(word: string): boolean {
    word = word.toUpperCase();
    return (verify(word) || nonSowpodsAcceptedWords.includes(word)) && word.length === 5;
}

export function getDaysSinceBeginning(): number {
    const startDate = DateTime.local(2022, 2, 26);
    const daysSince = Interval.fromDateTimes(startDate, DateTime.local());
    const daysSinceInt = daysSince.length('days');

    return Math.floor(daysSinceInt);
}

export function getTimeUntilTomorrow(): string {
    let rightNow = DateTime.local();
    let tomorrow = DateTime.local().plus({ days: 1 }).startOf('day');

    return tomorrow.diff(rightNow).toFormat('hh:mm:ss');
}

export function getTodaysWord(): string {
    let daysSinceBeginning = getDaysSinceBeginning();
    return wordList[daysSinceBeginning];
}
