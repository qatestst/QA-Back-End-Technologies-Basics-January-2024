// A function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive)
function oddOccurrences (sentence) {
    // Convert the sentence to lower case and split it by space
    let words = sentence.toLowerCase ().split (" ");
    // Create an empty object to store the word counts
    let counts = {};
    // Loop through the words array and increment the count for each word
    for (let word of words) {
      counts[word] = (counts[word] || 0) + 1;
    }
    // Create an empty array to store the odd words
    let oddWords = [];
    // Loop through the counts object and push the words with odd count to the oddWords array
    for (let word in counts) {
      if (counts[word] % 2 !== 0) {
        oddWords.push (word);
      }
    }
    // Return the oddWords array joined by space
    return oddWords.join (" ");
  }
  
  // Test the function with the given examples
  console.log (oddOccurrences ("Java C# Php PHP Java PhP 3 C# 3 1 5 C#")); // c# php 1 5
  console.log (oddOccurrences ("Cake IS SWEET is Soft CAKE sweet Food")); // soft food
  