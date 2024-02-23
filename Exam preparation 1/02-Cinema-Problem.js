function cinema(input){
    
    let numberOfMovies = Number(input[0]);

    let moviesArray = [];
    for (let i = 1; i<=numberOfMovies; i++){
        moviesArray.push(input[i]);
    }

    let commandsArray = input.slice(numberOfMovies+1);
    let command = "";

    for (i = 0; i < commandsArray.length; i++){
            
        command = commandsArray[i];
            
            if( command == "Sell"){
                console.log(`${moviesArray[0]} ticket sold!`) ;
                moviesArray.shift();
            } 
            else if (command.split(' ', 1) == "Add"){
               
               let arr = command.split(' ');
               arr.shift();
               let movie = arr.join(' '); 
               moviesArray.push(movie);

            }
            else if (command.split(' ', 1) == 'Swap'){
                let startIndex = command[5];
                let endIndex = command[7];
                if (moviesArray[startIndex] !== null && moviesArray[endIndex] !== null){
                let movie = moviesArray[startIndex];
                moviesArray[startIndex] = moviesArray[endIndex];
                moviesArray[endIndex] = movie;
                console.log('Swapped!');
                }

            }
            else if( command === "End"){
                break;
            }    
                    
               
    }

    if (moviesArray.length > 0){
        console.log(`Tickets left: ${moviesArray.join(', ')}`);
    }
    else{
        console.log('The box office is empty');
    }
}




//cinema(['3','Avatar', 'Titanic', 'Joker', 'Sell',  'End','Swap 0 1'])
cinema(['5', 'The Matrix', 'The Godfather', 'The Shawshank Redemption', 'The Dark Knight', 'Inception', 'Add The Lord of the Rings', 'Swap 1 4', 'End'])
cinema(['3','Avatar', 'Titanic', 'Joker', 'Sell', 'End', 'Swap 0 1'])