/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const timeSeconds = 3600; // seconds (1 hour)
const initialDistance = 0; // distance (km)
const remainingFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

//calcultes new distance
const newDistance = initialDistance + (initialVelocity*(timeSeconds/3600)); 

//calculates remaining fuel
const remainingfuelAfterBurnRate= remainingFuel - (fuelBurnRate*timeSeconds); 

// Calculate new velocity
 const calculateNewVelocity = (velocity, acceleration, time) => { 
  return velocity + (acceleration*(time*3.6));
}
//Ensure the function call is robust and catches errors
const newVelocity = calculateNewVelocity(initialVelocity, acceleration, timeSeconds);

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${fuelBurnRate} kg`);






