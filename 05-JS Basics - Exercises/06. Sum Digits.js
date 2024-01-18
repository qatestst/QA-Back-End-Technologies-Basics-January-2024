// Вариант първи
function solve(number){

    `use strict`;

    const numberAsString = number.toString();
    let totalSum = 0;

    for ( const char of numberAsString){
        const charAsNumber = parseInt(char, 10);
        totalSum += charAsNumber;
    }
    console.log(totalSum);
}

// Вариант втори
function solve2(number){

    `use strict`;

    let numberAsString = number.toString();
    let totalSum = 0;

    for ( let i =0; i < numberAsString.length; i++){
        let charAsNumber = parseInt(numberAsString[i], 10);
        totalSum += charAsNumber;
    }
    console.log(totalSum);
}

solve(12345)
solve2(12345)