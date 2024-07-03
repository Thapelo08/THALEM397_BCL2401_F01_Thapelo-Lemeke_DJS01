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

// Function to calculate new distance
const calculateNewDistance = (velocity, time) => {
  if (typeof velocity !== 'number' || typeof time !== 'number') {
    throw new Error('Invalid parameters: velocity and time must be numbers.');
  }
  return initialDistance + (velocity * (time / 3600)); // convert time to hours
};

// Function to calculate remaining fuel after burn rate
const calculateRemainingFuel = (remainingFuel, burnRate, time) => {
  if (typeof remainingFuel !== 'number' || typeof burnRate !== 'number' || typeof time !== 'number') {
    throw new Error('Invalid parameters: remainingFuel, burnRate, and time must be numbers.');
  }
  return remainingFuel - (burnRate * time);
};

// Function to calculate new velocity
const calculateNewVelocity = (velocity, acceleration, time) => {
  if (typeof velocity !== 'number' || typeof acceleration !== 'number' || typeof time !== 'number') {
    throw new Error('Invalid parameters: velocity, acceleration, and time must be numbers.');
  }
  return velocity + (acceleration * (time / 3600)); // convert time to hours
};

// Usage of the functions with error handling
try {
  const newDistance = calculateNewDistance(initialVelocity, timeSeconds);
  console.log(`Corrected New Distance: ${newDistance.toFixed(2)} km`);
} catch (error) {
  console.error("Error calculating new distance:", error.message);
}

try {
  const remainingFuelAfterBurnRate = calculateRemainingFuel(remainingFuel, fuelBurnRate, timeSeconds);
  console.log(`Corrected Remaining Fuel: ${remainingFuelAfterBurnRate.toFixed(2)} kg`);
} catch (error) {
  console.error("Error calculating remaining fuel:", error.message);
}

try {
  const newVelocity = calculateNewVelocity(initialVelocity, acceleration, timeSeconds);
  console.log(`Corrected New Velocity: ${newVelocity.toFixed(2)} km/h`);
} catch (error) {
  console.error("Error calculating new velocity:", error.message);
}
