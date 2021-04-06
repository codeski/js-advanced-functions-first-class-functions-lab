// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    return [array[0], array[1]]
}

const returnLastTwoDrivers = function(array) {
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
    return function() { return fare * fare }
}

function fareDoubler(fare) {
    return fare * 2
}

function fareTripler(fare) {
    return fare * 3
}

function selectDifferentDrivers(array, functionArg) {
    return functionArg(array)
}