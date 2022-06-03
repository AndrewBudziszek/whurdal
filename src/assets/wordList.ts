import { DateTime, Interval } from 'luxon';
import { verify } from 'whurdal-word-verifier';

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
    'VIRUS',
    'DELTA',
    'MUSIC',
    'CHEWY',
    'NOISE',
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
    'MARSH',
    'GIANT',
    'THETA',
    'POWER',
    'DOUBT',
    'SWING',
    'DRAFT',
    'RAISE',
    'FRESH',
    'RAPID',
    'VAGUE',
    'POUND',
    'AWFUL',
    'CREAM',
    'TULLE',
    'CRAZY',
    'JUDGE',
    'CHONK',
    'PARSE',
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
    'SHANK',
    'VALOR',
    'POINT',
    'FARCE',
    'SPIRE',
    'TOWER',
    'GUSTO',
    'MOIST',
    'CRANE',
    'SPIKE',
    'LEARN',
    'CHOIR',
    'XEROX',
    'QUANT',
    'MANOR',
    'EMAIL',
    'SERVE',
    'CABLE',
    'STEAM',
    'PRINT',
    'MONEY',
    'BIDET',
    'SPINE',
    'GIRTH',
    'FIBER',
    'SMART',
    'GHAST',
    'TOTAL',
    'ULTRA',
    'POISE',
    'BUILD',
    'GROIN',
    'SCONE',
    'INEPT',
    'FIRST',
    'HYPER',
    'CHORE',
    'SHINE',
    'MONTH',
    'GOURD',
    'QUERY',
    'EMOTE',
    'CLOSE',
    'SLICE',
    'INLAY',
    'SHORT',
    'CHIME', 
    'APART',
    'STORY',
    'DEPTH',
    'TODAY',
    'HEART',
    'WATCH',
    'PHASE'
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
