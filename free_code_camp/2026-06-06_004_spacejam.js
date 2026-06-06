/***************************************

- Challenge #004
- Date: 2026-06-06
- Platform: freeCodeCamp
- Title: Space Jam
- Topics: Strings, Iteration, Character Handling, Manual Transformation
- Description: Given a string, remove all spaces, insert two spaces between every character, convert all alphabetical letters to uppercase, and return the result.
  • Non-alphabetical characters remain unchanged except for spaces.
- Approach: Remove spaces manually, convert lowercase letters to uppercase using character codes, then rebuild the string with double spaces between each character.
- Notes: Practiced manual string processing instead of relying fully on built-in methods.

***************************************/

function spaceJam(s) {
    const trimmedStr = trim(s);

    const upperCaseStr = toUpperCase(trimmedStr);

    const finalStr = addDoubleSpaceAtEachCh(upperCaseStr);

    return finalStr;
}

function trim(str){
    let tempStr = str;
    let i=0;
    
    while(i<tempStr.length){
        if(tempStr[i] === ' '){
            tempStr = tempStr.slice(0, i) + tempStr.slice(i+1);
        } else {
            i += 1;
        }
    }
    
    return tempStr;
}

function toUpperCase(str){
    let tempStrArr = [];
        
    for(let i=0; i<str.length; ++i){
        if(str[i] >= 'a' && str[i] <= 'z'){
            tempStrArr.push(String.fromCharCode(str.charCodeAt(i) - 32));
        }else{
            tempStrArr.push(str[i]);
        }
    }
    
    return tempStrArr.join("");
}

function addDoubleSpaceAtEachCh(str){
    let tempStrArr = [str[0]];
    
    for(let i=1; i<str.length; ++i){
        tempStrArr.push('  ' + str[i]);
    }
    
    return tempStrArr.join("");
}