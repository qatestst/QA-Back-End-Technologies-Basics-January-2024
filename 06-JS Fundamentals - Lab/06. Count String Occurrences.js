function solve(string, searchedWord){
    let numberOfOcurrencies = 0;
    let words = string.split(' ');

    for(let word of words){
        if(searchedWord === word){
            numberOfOcurrencies++;
        }
    }

    console.log(numberOfOcurrencies);
}

solve('This is a word and it also is a sentence', 'is')