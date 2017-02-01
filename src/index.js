var uniqueRandomArray = require('unique-random-array');
var stoicApi = require('./stoicapi');
var getRandomItem = uniqueRandomArray(stoicApi);

module.exports = {
    all: stoicApi,
    random: random
};

function random(number) {
    if(number === undefined) {
        return getRandomItem();
    } else {
        var randomItems = [];
        for(var i = 0; i < number; i++) {
            randomItems.push(getRandomItem());
        }
        return randomItems;
    }
}