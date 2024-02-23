// A function that takes two arrays as parameters and prints the products and their quantities in the format: product -> quantity
function storeProvision(stock, delivery) {
    // Create an empty object to store the products and their quantities
    let products = {};
  
    // Loop through the stock array and add the products and their quantities to the object
    for (let i = 0; i < stock.length; i += 2) {
      let name = stock[i];
      let quantity = Number(stock[i + 1]);
      products[name] = quantity;
    }
  
    // Loop through the delivery array and update the products and their quantities in the object
    for (let i = 0; i < delivery.length; i += 2) {
      let name = delivery[i];
      let quantity = Number(delivery[i + 1]);
      // If the product already exists in the object, increase its quantity
      if (products[name]) {
        products[name] += quantity;
      }
      // Otherwise, add the product and its quantity to the object
      else {
        products[name] = quantity;
      }
    }
  
    // Loop through the object and print the products and their quantities in the format: product -> quantity
    for (let product in products) {
      console.log(product + " -> " + products[product]);
    }
  }
  
  // Test the function with the given examples
  let stock1 = ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'];
  let delivery1 = ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'];
  storeProvision(stock1, delivery1); // Chips -> 5
                                      // CocaCola -> 9
                                      // Bananas -> 44
                                      // Pasta -> 11
                                      // Beer -> 2
                                      // Flour -> 44
                                      // Oil -> 12
                                      // Tomatoes -> 70
  
  let stock2 = ['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'];
  let delivery2 = ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'];
  storeProvision(stock2, delivery2); // Salt -> 2
                                      // Fanta -> 4
                                      // Apple -> 21
                                      // Water -> 4
                                      // Juice -> 5
                                      // Sugar -> 44
                                      // Oil -> 12
                                      // Tomatoes -> 7
                                      // Bananas -> 30
  