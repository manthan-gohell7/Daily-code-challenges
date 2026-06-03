function isValidNumber(n, base) {
  var isValid = false;

  if(!(/^[a-zA-Z0-9]+$/)){
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