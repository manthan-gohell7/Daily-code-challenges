/***************************************

- Challenge #006
- Date: 2026-06-10
- Platform: freeCodeCamp
- Title: Anagram Checker
- Topics: Strings, Hash Maps, Frequency Counting, Validation
- Description: Given two strings, determine whether they are anagrams of each other. Ignore casing and white space.
- Approach: Normalize both strings by removing spaces and converting to lowercase. Count character frequencies using hash maps and compare the resulting frequency distributions.
- Notes: Practiced frequency counting and map-based comparison for character validation.

***************************************/

function areAnagrams(str1, str2) {
  const trimmedStr1 = str1.toLowerCase().split(" ").join("");
  const trimmedStr2 = str2.toLowerCase().split(" ").join("");

  if(trimmedStr1.length !== trimmedStr2.length){
    return false;
  }

  const pocketMaps = [new Map(), new Map()];
  for(let i=0; i<trimmedStr1.length; ++i){
    const key1 = trimmedStr1[i];
    const key2 = trimmedStr2[i];

    if(pocketMaps[0].has(key1)){
      pocketMaps[0].set(key1, pocketMaps[0].get(key1) + 1);
    }else{
      pocketMaps[0].set(key1, 1);
    }

    if(pocketMaps[1].has(key2)){
      pocketMaps[1].set(key2, pocketMaps[1].get(key2) + 1);
    }else{
      pocketMaps[1].set(key2, 1);
    }
  }

  if(pocketMaps[0].size !== pocketMaps[1].size){
    return false;
  }
    
  let isAnagram = true;
  for(const [key, value] of pocketMaps[0]){      
    if(!pocketMaps[1].has(key)){      
      isAnagram = false;
      break;
    }

    if(pocketMaps[1].get(key) !== value){      
      isAnagram = false;
      break;
    }
  }

  return isAnagram;
}