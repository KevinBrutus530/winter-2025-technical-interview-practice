/**
 * Problem: Given a string, write a function to determine if it is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 * Ignore spaces, punctuation, and capitalization.
 *
 * Example:
 * isPalindrome("A man, a plan, a canal: Panama") => true
 * isPalindrome("race a car") => false
 *
 * @param {string} str - The input string.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  // your code here
  // replace non-alphanumeric characters and spaces then convert to lowercase for case-sensitive purposes
  if (typeof str !== "string") return "Not a string, please use a valid input";
  let strAN = str.replace(/\W/g, "").toLowerCase();

  // check that it is equal when reversed
  return strAN === strAN.split("").reverse().join("");
}

module.exports = isPalindrome;
