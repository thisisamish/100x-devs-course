/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  // Idea - Increase count of char from str1, decrease count of char from str2.
  // Then traverse the map and see if all key: value pairs have value = 0 or not.
  // If all values are 0 then that means that we have an anagram, otherwise not.
  if (str1.length !== str2.length) return false;

  const hashmap = new Map();

  for (let ch in str1) {
    let newVal = hashmap.get(ch) ? hashmap.get(ch) + 1 : 1;
    hashmap.set(ch, newVal);
  }
  for (let ch in str2) {
    let newVal = hashmap.get(ch) ? hashmap.get(ch) - 1 : -1;
    hashmap.set(ch, newVal);
  }

  for (let el of hashmap) {
    if (el[1] != 0) return false;
  }

  return true;
}

console.log(isAnagram("scrap", "arppsc"));
