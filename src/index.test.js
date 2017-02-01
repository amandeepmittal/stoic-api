const expect = require('chai').expect;
const stoicApi = require('./index');

describe('stoicApi', function () {
    describe('all', function () {
        it('should be an array of strings', function () {
            expect(stoicApi.all).to.satisfy(isArrayOfStrings);
            
            function isArrayOfStrings(array) {
                return array.every(function (item) {
                    return typeof item === 'string';
                });
            }
        });
    });

    describe('random', function () {
        it('should return a random item from stoicApi.all', function () {
            let randomItem = stoicApi.random();
            expect(stoicApi.all).to.include(randomItem);
        });
        
        it('should return an array of random items if passed a number', function () {
            let randomItems = stoicApi.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function (item) {
                expect(stoicApi.all).to.include(item);
            });
        });
    });
});