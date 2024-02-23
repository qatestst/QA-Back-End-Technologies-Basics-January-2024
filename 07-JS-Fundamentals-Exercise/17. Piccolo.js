// A function that records and removes car numbers in a parking lot
function piccolo (input) {
    // Create an empty set to store the car numbers in the parking lot
    let parkingLot = new Set ();
    // Loop through the input array
    for (let entry of input) {
      // Split the entry by comma and get the direction and car number
      let [direction, carNumber] = entry.split (", ");
      // If the direction is "IN", add the car number to the parking lot set
      if (direction === "IN") {
        parkingLot.add (carNumber);
      }
      // If the direction is "OUT", delete the car number from the parking lot set
      if (direction === "OUT") {
        parkingLot.delete (carNumber);
      }
    }
    // Convert the parking lot set to an array and sort it in ascending order
    let sortedCars = [...parkingLot].sort ();
    // If the parking lot is empty, print "Parking Lot is Empty"
    if (sortedCars.length === 0) {
      console.log ("Parking Lot is Empty");
    }
    // Otherwise, print the sorted car numbers
    else {
      console.log (sortedCars.join ("\n"));
    }
  }
  
  // Test the function with the given examples
  piccolo ([
    "IN, CA2844AA",
    "IN, CA1234TA",
    "OUT, CA2844AA",
    "IN, CA9999TT",
    "IN, CA2866HI",
    "OUT, CA1234TA",
    "IN, CA2844AA",
    "OUT, CA2866HI",
    "IN, CA9876HH",
    "IN, CA2822UU",
  ]); // CA2822UU
  // CA2844AA
  // CA9876HH
  // CA9999TT
  piccolo (["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]); // Parking Lot is Empty
  