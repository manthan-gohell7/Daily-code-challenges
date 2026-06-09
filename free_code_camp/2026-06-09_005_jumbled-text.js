/***************************************

- Challenge #005
- Date: 2026-06-09
- Platform: freeCodeCamp
- Title: Jumbled Text
- Topics: Strings, Sorting, Iteration, Word Processing
- Description: Given a string, return a jumbled version of that string where each word is transformed using the following constraints:
  • The first and last letters of the words remain in place
  • All letters between the first and last letter are sorted alphabetically.
  • The input strings will contain no punctuation, and will be entirely lowercase.
- Approach: Split the text into words, keep the first and last characters fixed, sort the middle characters of each word, and rebuild the sentence.
- Notes: Practiced string slicing, array handling, and custom sorting logic.

***************************************/

function jbelmu(text) {
  const words = text.split(" ");

  let finalStrArr = [];

  for(const word of words){
    if(word.length <= 3){
      finalStrArr.push(word);
      continue;
    }

    let strArr = word.split("");

    for(let i=1; i<word.length-1; ++i){
      for(let j=i+1; j<word.length-1; ++j){
        if(strArr[i] > strArr[j] && (strArr[i] !== ' ' && strArr[j] !== ' ')){
          strArr[i] += ' ' + strArr[j];
          strArr[j] = strArr[i].split(' ')[0];
          strArr[i] = strArr[i].split(' ')[1];
        }
      }
    }

    finalStrArr.push(strArr.join(""));
  }

  return finalStrArr.join(" ");
}