function solve(inputArray, step){
    `use strict`;

        const result = [];

        for ( let index =0; index < inputArray.length; index +=step){
            result.push(inputArray[index])
        }

        return result;

}