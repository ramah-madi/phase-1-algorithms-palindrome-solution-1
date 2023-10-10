function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // Write your algorithm here
    
  const reversedWord = reverseString(word);
  
  return word === reversedWord;
}

/* 
  Add your pseudocode here
    reverse the input string

  if the reversed string is the same as the input
     return true
  else
     return false
*/

/*
  Add written explanation of your solution here
  If the input string is the same after I reverse it, I should return true

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));
}

module.exports = isPalindrome;
