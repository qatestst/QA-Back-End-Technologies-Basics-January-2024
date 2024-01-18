function solve(number, op1, op2, op3, op4, op5){

    'use strict';
    
    let result = number;
   
        switch((op1)){
            case "chop": result /= 2; console.log(result); break;
            case "dice":  result = Math.sqrt(result); console.log(result);break;
            case "spice": result += 1;console.log(result); break;
            case "bake": result *= 3; console.log(result);break;
            case "fillet": result = result - (0.2*result);console.log(result); break;
        }
        switch((op2)){
            case "chop": result /= 2; console.log(result); break;
            case "dice":  result = Math.sqrt(result); console.log(result);break;
            case "spice": result += 1;console.log(result); break;
            case "bake": result *= 3; console.log(result);break;
            case "fillet": result = result - (0.2*result);console.log(result); break;
        }
        switch((op3)){
            case "chop": result /= 2; console.log(result); break;
            case "dice":  result = Math.sqrt(result); console.log(result);break;
            case "spice": result += 1;console.log(result); break;
            case "bake": result *= 3; console.log(result);break;
            case "fillet": result = result - (0.2*result);console.log(result); break;
        }
        switch((op4)){
            case "chop": result /= 2; console.log(result); break;
            case "dice":  result = Math.sqrt(result); console.log(result);break;
            case "spice": result += 1;console.log(result); break;
            case "bake": result *= 3; console.log(result);break;
            case "fillet": result = result - (0.2*result);console.log(result); break;
        }
        
        switch((op5)){
            case "chop": result /= 2; console.log(result); break;
            case "dice":  result = Math.sqrt(result); console.log(result);break;
            case "spice": result += 1;console.log(result); break;
            case "bake": result *= 3; console.log(result);break;
            case "fillet": result = result - (0.2*result); console.log(result); break;
        }

}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9','dice','spice','chop','bake','fillet')

// Решение чрез използване на масив

function solve2(input){

    let result = Number(input[0]);

    for ( let i = 1; i<=5; i++){
        switch(input[i]){
            case "chop": result /= 2; console.log(result); break;
            case "dice":  result = Math.sqrt(result); console.log(result);break;
            case "spice": result += 1;console.log(result); break;
            case "bake": result *= 3; console.log(result);break;
            case "fillet": result = result - (0.2*result);console.log(result); break;
        }
    }
    
}
solve2('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve2('9','dice','spice','chop','bake','fillet')


function solve3(number, op1, op2, op3, op4, op5){

    let result = number;

    let data = [op1, op2, op3, op4, op5];

    for ( let i = 1; i<=5; i++){
        switch(data[i]){
            case "chop": result /= 2; console.log(result); break;
            case "dice":  result = Math.sqrt(result); console.log(result);break;
            case "spice": result += 1;console.log(result); break;
            case "bake": result *= 3; console.log(result);break;
            case "fillet": result = result - (0.2*result);console.log(result); break;
        }
    }
    
}
solve3('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve3('9','dice','spice','chop','bake','fillet')



// Решение чрез изпозване на масив и for-of за обхождане на масива
function solve4(rawNumber, firstOperation, secondOperation, thirdOperation, forthOperation, fifthOperation) {
    'use strict';

    const operations = [firstOperation, secondOperation, thirdOperation, forthOperation, fifthOperation];

    function executeOperation(currentNumber, currentOperation) {
        if (currentOperation === 'chop') {
            return currentNumber / 2;
        } else if (currentOperation === 'dice') {
            return Math.sqrt(currentNumber);
        } else if (currentOperation === 'spice') {
            return currentNumber + 1;
        } else if (currentOperation === 'bake') {
            return currentNumber * 3;
        } else if (currentOperation === 'fillet') {
            return currentNumber * 0.8;
        } else {
            return currentNumber;
        }
    }

    let number = parseInt(rawNumber, 10);

    for (const operation of operations) {
        number = executeOperation(number, operation)
        console.log(number)
    }
}

solve4('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve4('9', 'dice', 'spice', 'chop', 'bake', 'fillet');