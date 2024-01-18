function mathOperations(num1, num2, operand){
    `use strict`;
    switch(operand){
        case "+": console.log(num1 + num2); break;
        case "-": console.log(num1 - num2); break;
        case "*": console.log(num1 * num2); break;
        case "/": console.log(num1 / num2); break;
        case "%": console.log(num1 % num2); break;
        case "**": console.log(num1 ** num2); break;
    }
}
mathOperations(5,4,"*");