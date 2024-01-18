function solve(number){
    `use stict`;
    let sum = 0;
    let numberToString = number.toString();
    let isSame = true;

    for ( let i = 0; i < numberToString.length; i++){
        let char = parseInt(numberToString[i]);
        let char2 = parseInt(numberToString[0]);
        
        
            if (char !== char2)
            {
                    isSame = false;
            }
        
        
        sum += char; 
        
    }
    console.log(isSame);
    console.log(sum);
}
solve(111111);
solve(1111119);
solve(9111111);
solve(1119111);