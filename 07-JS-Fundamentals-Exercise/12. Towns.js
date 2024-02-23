// Define a function that takes an array of strings as input
function createObjects(input) {
    // Loop through each string in the input array
    for (let row of input) {
      // Split the string by pipes and spaces to get the values
      let [town, latitude, longitude] = row.split(" | ");
      // Parse the latitude and longitude to numbers and format them to two decimal places
      latitude = Number(latitude).toFixed(2);
      longitude = Number(longitude).toFixed(2);
      // Create an object with the town, latitude and longitude properties
      let obj = { town, latitude, longitude };
      // Print the object to the console
      console.log(obj);
    }
  }
  
  // Test the function with some examples
  let input1 = ['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'];
  let input2 = ['Plovdiv | 136.45 | 812.575'];
  
  createObjects(input1);
  createObjects(input2);
  