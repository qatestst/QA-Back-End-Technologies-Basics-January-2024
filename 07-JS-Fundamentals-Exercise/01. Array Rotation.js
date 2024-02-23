function solve(inputArray, numberOfROtations){
    `use strict`;

    for ( let index = 0; index < numberOfROtations; index++){
        const firstElement = inputArray.shift();
        inputArray.push(firstElement);
    }
    console.log(inputArray.join(' '));
}