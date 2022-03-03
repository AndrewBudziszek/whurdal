var luxon = require('luxon'); 
const { getDaysSinceBeginning, getTodaysWord, verifyWordsInList, getTimeUntilTomorrow, wordIsValid } = require('./wordList');

describe('wordList Tests', () => {
    describe('getDaysSinceBeginning()', () => {
        it('returns the correct number of days since beginning', () => {
            const daysSinceBeginning = getDaysSinceBeginning();
    
            const startDate = luxon.DateTime.fromISO("2022-02-26T00:00");
            const daysSince = luxon.Interval.fromDateTimes(startDate, luxon.DateTime.now());
            const daysSinceInt = parseInt(daysSince.length('days'));
    
            expect(daysSinceInt).toBe(daysSinceBeginning);
        });
    });

    describe('check that word list is valid', () => {
        it('no words are rejected', () => {
            let rejectedWords = verifyWordsInList();

            expect(rejectedWords).toEqual([]);
        });
    });

    describe('wordIsValid', () => {
        it('returns true for a valid word', () => {
            expect(wordIsValid('union')).toBe(true);
        });

        it('returns false for a word that is longer than 5 characters', () => {
            expect(wordIsValid('truthy')).toBe(false);
        });

        it('returns false for a word that is not real', () => {
            expect(wordIsValid('tyapd')).toBe(false);
        });

        it('returns true for specially added words', () => {
            expect(wordIsValid('chonk')).toBe(true);
            expect(wordIsValid('GRATZ')).toBe(true);
        });

        it('returns false for words that are too short', () => {
            expect(wordIsValid('that')).toBe(false);
            expect(wordIsValid('to')).toBe(false);
            expect(wordIsValid('cute')).toBe(false);
        });
    })
})