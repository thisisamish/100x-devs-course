/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    if (str1.length != str2.length) {
        return false;
    }

    const letterCount1 = new Array(26).fill(0);
    const letterCount2 = new Array(26).fill(0);

    for (let i = 0; i < str1.length; i++) {
        letterCount1[str1[i] % 'a']++;
        letterCount2[str2[i] % 'a']++;
    }

    for (let i = 0; i < 26; i++) {
        if (letterCount1[i] != letterCount2[i]) {
            return false;
        }
    }

    return true;
}

module.exports = isAnagram;