var luxon = require('luxon'); 
const { getDaysSinceBeginning, getTodaysWord } = require('./wordList');

describe('wordList Tests', () => {
    describe('getDaysSinceBeginning()', () => {
        it('returns the correct number of days since beginning', () => {
            const daysSinceBeginning = getDaysSinceBeginning();
    
            const startDate = luxon.DateTime.fromISO("2022-02-26T00:00");
            const daysSince = luxon.Interval.fromDateTimes(startDate, luxon.DateTime.now());
            const daysSinceInt = parseInt(daysSince.length('days'));
    
            expect(daysSinceInt).toBe(daysSinceBeginning);
        });
    })
})