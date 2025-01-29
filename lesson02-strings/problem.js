/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  // Your code here
  const set = new Map();

  let max = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    if (set.get(s[right]) >= left) {
      left = set.get(s[right]) + 1;
    } else {
      max = Math.max(max, right - left + 1);
    }
    set.set(s[right], right);
  }
  return max;
}

module.exports = lengthOfLongestSubstring;
