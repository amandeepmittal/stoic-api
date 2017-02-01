'use strict';

const uniqueRandomArray = require('unique-random-array');
const stoicApi = require('./stoicapi');
const getRandomItem = uniqueRandomArray(stoicApi);

module.exports = {
    all: stoicApi,
    random: random
};

function random(number) {
    if (number === undefined) {
        return getRandomItem();
    } else {
        let randomItems = [];
        for (let i = 0; i < number; i++) {
            randomItems.push(getRandomItem());
        }
        return randomItems;
    }
}