/***************************************

- Date: 2026-06-02
- Platform: freeCodeCamp
- Challenge: Vowel Balance
- Description: Determine whether the number of vowels in the left half of a string is equal to the number of vowels in the right half. If the string length is odd, ignore the middle character.
  • The string can contain any characters.
  • The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
  • If there's an odd number of characters in the string, ignore the center character.
- Approach: Remove the center character for odd-length strings, split the remaining
  string into two halves, count vowels in each half, and compare the counts.
- Notes: Used basic string methods and array filtering. Removed debug output before commit.

***************************************/

function isBalanced(s) {
  const strLen = s.length;

  var tempStr = s;
  if(strLen % 2 == 1){
    tempStr = removeAtIndex(s, Math.floor(strLen / 2));
  }

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const lStr = tempStr.slice(0, strLen / 2).toLowerCase();
  const lVowelCnt = lStr.toLowerCase().split("").filter(char => vowels.includes(char)).length;

  const rStr = tempStr.slice(strLen / 2).toLowerCase();
  const rVowelCnt = rStr.toLowerCase().split("").filter(char => vowels.includes(char)).length;

  return lVowelCnt === rVowelCnt;
}

function removeAtIndex(str, index){
  return str.slice(0, index) + str.slice(index + 1);
}