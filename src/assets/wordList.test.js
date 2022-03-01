var luxon = require('luxon'); 
const { getDaysSinceBeginning, getTodaysWord, verifyWordsInList, getTimeUntilTomorrow } = require('./wordList');


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

    describe('check that wordlist is valid', () => {
        it('no words are rejected', () => {
            let rejectedWords = verifyWordsInList();

            expect(rejectedWords.length).toBe(0);
        })
    });
})