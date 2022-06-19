function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord = word.split("").reverse().join("")
  return word === reverseWord;
}

/* 
  Add your pseudocode here
  First, I created a new variable, reverseWord
  I split, reverse then join it toa string
  If the reversed word, forward and backword is the same return true
  Else false
*/

/*
  Add written explanation of your solution here
  I created a new variable, reverseWord
  The code checks if the reversedWord is equal to word, returns true
  else returns false if they are not equal
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
