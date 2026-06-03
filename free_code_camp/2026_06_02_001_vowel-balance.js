function isBalanced(s) {
  const strLen = s.length;

  var tempStr = s;
  if(strLen % 2 == 1){
    tempStr = removeAtIndex(s, Math.floor(strLen / 2));
  }

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const vowelCnt = tempStr.toLowerCase().split("").filter(char => vowels.includes(char)).length;

  return vowelCnt % 2 == 0;
}

function removeAtIndex(str, index){
  return str.slice(0, index) + str.slice(index + 1);
}