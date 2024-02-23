function solve(string, startIndex, count){
    `use strict`;

    let num1 = Number(startIndex);
    let num2 = Number(count);
    let result = string.substring(num1, num1+num2);
    console.log(result);
   
}

solve("ASentence", 1, 8)