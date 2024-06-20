// Function to return the first two drivers
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2); // Slice the array to get the first two elements
  }
  
  // Function to return the last two drivers
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2); // Slice the array to get the last two elements
  }
  
  // Array containing the driver selection functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Function factory to create fare multiplier functions
  function createFareMultiplier(multiplier) {
    return (fare) => fare * multiplier; // Create a function that multiplies fare by the provided multiplier
  }
  
  // Function to double fares
  const fareDoubler = createFareMultiplier(2); // Create a fare doubler function
  
  // Function to triple fares
  const fareTripler = createFareMultiplier(3); // Create a fare tripler function
  
  // Function to select drivers based on a provided selection function
  function selectDifferentDrivers(arrayOfDrivers, selectionFunction) {
    return selectionFunction(arrayOfDrivers); // Call the provided selection function with the driver array
  }
  
  // Example usage
  const drivers = ["Lewis Hamilton", "Max Verstappen", "Charles Leclerc", "Sergio Perez"];
  
  const firstTwo = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
  console.log(firstTwo); // Output: ["Lewis Hamilton", "Max Verstappen"]
  
  const lastTwo = selectDifferentDrivers(drivers, returnLastTwoDrivers);
  console.log(lastTwo); // Output: ["Charles Leclerc", "Sergio Perez"]
  
  const doubledFare = fareDoubler(100);
  console.log(doubledFare); // Output: 200
  
  const tripledFare = fareTripler(150);
  console.log(tripledFare); // Output: 450
  