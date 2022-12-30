const SCUBER_HEADQUARTERS = 42;
const FEET_IN_BLOCK_MANHATTAN = 264;
const FREE_SAMPLE = {
    cost: 0,
    to_feet: 400,
}
const SECOND_FARE = {
    cost: 0.02,
    to_feet: 2000
}
const THIRD_FARE = {
    cost: 25,
    to_feet: 2500
}
const FORTH_FARE = {
    msg: `cannot travel that far`,
    from_feet: 2501
}

function distanceFromHqInBlocks(location){
    return Math.abs(location - SCUBER_HEADQUARTERS);
}

function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location) * FEET_IN_BLOCK_MANHATTAN;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start) * FEET_IN_BLOCK_MANHATTAN;
}

function calculatesFarePrice(start, destination){
    let travelled_feet = distanceTravelledInFeet(start, destination);
    if(travelled_feet <= FREE_SAMPLE.to_feet)
        return FREE_SAMPLE.cost;

    else if(travelled_feet <= SECOND_FARE.to_feet)
        return (travelled_feet - FREE_SAMPLE.to_feet) * SECOND_FARE.cost;
    
    else if(travelled_feet <= THIRD_FARE.to_feet)
        return THIRD_FARE.cost;
        
    else if(travelled_feet >= FORTH_FARE.from_feet)
        return FORTH_FARE.msg;
    
}
