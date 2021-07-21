const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = drivers => drivers.slice(0,2)
const returnLastTwoDrivers =  drivers => drivers.slice(2,drivers.length) 


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = function (x) {
    return y => x*y
}

const fareDoubler = createFareMultiplier => createFareMultiplier*2
const fareTripler = createFareMultiplier => createFareMultiplier*3
let selectDifferentDrivers = (drivers, returnLastTwoDrivers) => returnLastTwoDrivers (drivers)

