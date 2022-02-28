// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']; //Driver Arrays

const returnFirstTwoDrivers = ([]) => { return drivers.slice(0,2); } //Arrow Function to return only the first two drivers
const returnLastTwoDrivers = ([]) => { return drivers.slice(-2) } //Arrow Function to return only the last two drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 

const createFareMultiplier = function (fareMultiplier) { //Creating Fare Multiplier
    return function(multiplier) {
        return fareMultiplier * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, func) => { //Selecting Different Drivers
    return func(drivers)
}
