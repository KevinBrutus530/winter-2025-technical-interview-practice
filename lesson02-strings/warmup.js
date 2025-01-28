// 1. given a string with three characters, return the second character
const getSecondChar = (str) => {
  return str[1];
};

// 2. get the second and third char from a string. the string will always have atleast three characters

// 'cat' => 'at'
// 'robbed' => 'ob'
const getSecondAndThirdChar = (str) => {
  return str.slice(1, 3);
};

// console.log(getSecondAndThirdChar('cat'))

// 3. Given a word with 5 letters, return the second through 5th letter

function getSecondThroughFifthLetter(word) {
  return word.slice(1);
}

// console.log(getSecondThroughFifthLetter('train'))

// 4. given a string and a number called N, return the second through the Nth character

// 'schoolbus', 5 => 'choo'
// 'telephone', 6 => 'eleph
const secondThroughNthChar = (str, n) => {
  return str.slice(1, n);
};

// console.log(secondThroughNthChar('schoolbus', 5))

// slice is a ?? method: array and also a string method
// splice is a array method

// 5. Given an array of booleans, return an arrray of only false elements

// [true, true, false, true , false] => [false, false]

const getFalseElements = (arr) => {
  return arr.filter((el) => el === false);
};

// console.log(getFalseElements([true, true, false, true , false]))

// 6. given a string with two words, put ' the ' between the words and return the string

// 'to beach' => 'to the beach'
// 'for real' => 'for the real'
// 'jim john' => 'jim the john'
// 'to house' => 'to the house'
const addTheToString = (str) => {
  return str.split(" ").join(" the ");
};

// console.log(addTheToString('to beach'))

// 7.  given two numbers, price and discount, return the price after the discount is applied

// price is 100 and discount is 15

// 100, 15 => 85

// 70, 3 => 67.9

const getDiscout = (price, discount) => {
  let discountPercent = discount / 100;

  return price - price * discountPercent;
};

console.log(getDiscout(100, 15));
console.log(getDiscout(70, 3));

// Console.log each of your answers with the test cases provided. Attempt to write each one with TDD.
