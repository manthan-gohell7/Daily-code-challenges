/***************************************

- Date: 2026-06-03
- Platform: freeCodeCamp
- Challenge: Base Check
- Description: Given a string representing a number and a base from 2 to 36, determine whether the number is valid in that base. The check is case-insensitive, and every character must be a valid digit for the given base.
- Approach: Validate the input string, then check whether each character belongs to the allowed digit range for the base.
- Notes: Kept the solution compact and used string/regex methods for validation.

***************************************/

function isValidNumber(n, base) {
  var isValid = false;

  if(!(/^[a-zA-Z0-9]+$/.test(n))){
    return isValid;
  }

  if(base < 10){
    if(/^[a-zA-Z0-9]$/.test(n)){
      return isValid;
    }

    isValid = !n.split("").some(char => char >= String(base));
  } else {
    if(/^\d+$/.test(n)){
       isValid = true;
    }else{
       const lowerCaseN = n.toLowerCase();
       const alphabets = "abcdefghijklmnopqrstuvwxyz";
       const aplhaIndex = base - 10;

       isValid = !lowerCaseN.split("").some(char => char >= alphabets[aplhaIndex]);
    }
  }

  return isValid;
}