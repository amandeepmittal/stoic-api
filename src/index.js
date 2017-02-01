var uniqueRandomArray = require('unique-random-array');
var stoicApi = require('./stoicapi');

module.exports = {
    all: stoicApi,
    random: uniqueRandomArray(stoicApi)
};