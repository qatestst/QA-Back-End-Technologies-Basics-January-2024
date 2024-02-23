function solve(grade){

    if ( grade < 3.00) {
        console.log(`Fail (2)`);
    }
    else if( grade >= 3.00 && grade < 3.50 ){
        console.log(`Poor (${grade.toFixed(2)})`);
    }
    else if (grade >= 3.50 && grade< 4.50){
        console.log(`Good (${grade.toFixed(2)})`);
    }
    else if(grade >= 4.50 && grade< 5.50){
        console.log(`Very good (${grade.toFixed(2)})`);
    }
    else if (grade >= 5.50){
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}
solve(2.99)
solve(3)
solve(3.49)
solve(3.89)
solve(5.9)
