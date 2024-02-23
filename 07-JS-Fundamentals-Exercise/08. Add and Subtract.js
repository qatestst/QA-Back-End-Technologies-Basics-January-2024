function solve(firstNumber, secondNumber, thirdNumber ){
    `use strict`;
    
   function sum(first, second){
    return first + second
   }
   
// идентична функция с гореописаната   
// const sum (first, second) => first + second;
const substract = (first, second) => first - second;

const result = substract(sum(firstNumber, secondNumber), thirdNumber);
console.log(result);

}