function printAndSum(num1, num2){
    `use stict`;
    let sum = 0;
    let allNumbers = "";
    for ( let i = num1; i <= num2; i++)
    {
        allNumbers += i + " ";
        sum += i;
    }
    console.log(allNumbers);
    console.log("Sum: " + sum);

}
printAndSum(5, 10)