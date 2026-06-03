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

  console.log(lStr + ": " + String(lVowelCnt));
  console.log(rStr + ": " + String(rVowelCnt));

  return lVowelCnt === rVowelCnt;
}

function removeAtIndex(str, index){
  return str.slice(0, index) + str.slice(index + 1);
}