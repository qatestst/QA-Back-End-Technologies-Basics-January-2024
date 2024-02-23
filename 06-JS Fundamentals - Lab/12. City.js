// Define a function that takes an object as a parameter
function printObject(obj) {
    // Loop through the keys of the object
    for (let key in obj) {
      // Print the key and the value in the required format
      console.log(key + " -> " + obj[key]);
    }
  }

  // Test the function with some sample inputs
printObject({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000"
});

printObject({
  name: "Plovdiv",
  area: 389,
  population: 1162358,
  country: "Bulgaria",
  postCode: "4000"
});