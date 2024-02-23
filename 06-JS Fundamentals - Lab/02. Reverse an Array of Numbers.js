function solve(elements, array){
    let arr = [];
    
    for ( let i = 0; i <elements; i++){
        arr.push(array[i]);
    }

    arr.reverse();
    
   //let output = ""; 
//    for ( let i =0; i< arr.length; i++){
//     output += ` ${arr[i]}`;
//    }
   //console.log(output);
   console.log(arr.join(` `));
}

solve( 3, [10, 20, 30, 40, 50])