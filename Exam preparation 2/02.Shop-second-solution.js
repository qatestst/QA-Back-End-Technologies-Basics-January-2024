function shop(input){

    let numberOfproducts = Number(input[0]);
    let productsArray = input.slice(1,numberOfproducts+1);
    let commandsArray = input.slice(numberOfproducts+1);


    for (let i = 0; i < commandsArray.length; i++){

        let command = commandsArray[i];
        
        if(command === "Sell"){
            console.log(`${productsArray[0]} product sold!`);
            productsArray.shift();
        }
        else if (command.startsWith("Add")){
            let productToAdd = command.split(" ");
            productsArray.push(productToAdd[1]);
        }
        else if (command.startsWith("Swap")){
            
            let firstIndex = command[5];
            let secondIndex = command[7];

            let swapableProduct = productsArray[firstIndex];
            productsArray[firstIndex] = productsArray[secondIndex];
            productsArray[secondIndex] = swapableProduct;
            console.log("Swapped!");
        }
        else if(command === "End"){
            break;
        }
        
    }

    if(productsArray.length > 0){
        console.log("Products left: " + productsArray.join(", ").trim());
    }
    else if(productsArray.length == 0){
        console.log("The shop is empty");
    }

}

//shop(['3', 'Apple', 'Banana', 'Orange', 'Sell', 'End', 'Swap 0 1'])

//shop(['5', 'Milk', 'Eggs', 'Bread', 'Cheese', 'Butter', 'Add Yogurt', 'Swap 1 4', 'End']) 
shop(['3', 'Shampoo', 'Soap', 'Toothpaste', 'Sell', 'Sell', 'Sell', 'End'])