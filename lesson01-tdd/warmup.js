// 1. Given an integer, n,  between 3 and 100, return a line with n '*' characters

// 5 => '*****'
// 12 => '************'
// 3 => "***"

const addAsterisks = (num) => {
  // create an empty str
  let str = "";
  // add an asterisk for the number while num is greater than 0
  while (num > 0) {
    str += "*";
    num--;
  }

  return str;
};

// 2. Given an integer, n, between 3 and 100,
// return a line n characters long where the first and last character are '*' and all the middle characters are a space.

// 5 => '*   *'
// 12 => '*          *'
const addAsterisksAndSpaces = (num) => {
  let str = "";
  const originalNum = num;
  while (num > 0) {
    if (num === originalNum || num === 1) {
      str += "*";
    } else {
      str += " ";
    }
    num--;
  }
  return str;
};

// 3. Given two integers, n and m, create n lines of m characters. The first and last line should be made of all '*' and all the middle lines should start and end with '*' and have all spaces in the middle

// 5,5 => *****
//        *   *
//        *   *
//        *   *
//        *****

const addAsterisksAndSpacesLines = (num, m) => {
  let str = "";
  const originalNum = num;
  while (m > 0) {
    // str += "\n";
    m--;
  }
  return str;
};

// Console.log the result of each of the above functions to test them. Run your file with node warmup.js and check the terminal for the correct output.
console.log(addAsterisksAndSpaces(3));
console.log(addAsterisksAndSpacesLines(5, 5));
