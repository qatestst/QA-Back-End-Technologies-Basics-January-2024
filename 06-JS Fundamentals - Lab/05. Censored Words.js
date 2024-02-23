function replaceWord(text, word) {
    // Get the length of the word
    let length = word.length;
    // Create a string of '*' with the same length
    let stars = '*'.repeat(length);
    // Initialize a censored variable with the text
    let censored = text;
    // Loop until the censored variable no longer contains the word
    while (censored.includes(word)) {
      // Find the index of the word in the censored variable
      let index = censored.indexOf(word);
      // Replace the word with the stars
      censored = censored.substring(0, index) + stars + censored.substring(index + length);
        // Този ред код прави следното:
        // Извлича подниз от променливата censored, започвайки от позиция 0 и завършвайки на позиция index. Това е частта от текста, която не съдържа думата, която искаме да заменим.
        // Събира тази част с променливата stars, която е низ от звездички с дължина, равна на дължината на думата, която искаме да заменим.
        // Събира резултата с друга подниз от променливата censored, започвайки от позиция index + length и завършвайки до края на текста. Това е частта от текста, която следва след думата, която искаме да заменим.
        // Присвоява новата стойност на променливата censored, като по този начин замества първото срещане на думата със звездички.
        // Така този ред код реализира една итерация на цикъла while, който продължава, докато променливата censored не съдържа повече думата, която искаме да заменим.
    }
    // Return the censored variable
    console.log(censored);
  }


function replaceWord1(text, word) {
    // Get the length of the word
    let length = word.length;
    // Create a string of '*' with the same length
    let stars = '*'.repeat(length);
    // Use a regular expression to replace all occurrences of the word with the stars
    let regex = new RegExp(word, 'gi');
    let result = text.replace(regex, stars);
    // Return the result
    console.log(result);
  }

  function replaceWord2(text, word) {
    // Get the length of the word
    let length = word.length;
    // Create a string of '*' with the same length
    let stars = '*'.repeat(length);
    // Initialize an index variable
    let index = 0;
    // Loop through the text until the index reaches the end
    
    while (index < text.length) {
      // Check if the substring starting from the index matches the word
      if (text.substring(index, index + length).toLowerCase() === word.toLowerCase()) {
        // Replace the substring with the stars
        text = text.substring(0, index) + stars + text.substring(index + length);
        // Increment the index by the length of the word
        index += length;
      } else {
        // Increment the index by one
        index++;
      }
    }
    // Prints the result
    console.log(text);
  }
  

replaceWord('A small sentence with some words', 'small');

replaceWord1('A small sentence with some words', 'small');