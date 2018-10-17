var isPalindrome = function (value) {
    var string = value.toString();
    for (var i = 0; i < string.length; i++) {
      if (string[i] === string[string.length - i - 1]) {
        var palindrome = true;
        return palindrome;
      }
      else {
        palindrome = false;
        return palindrome;
      }
    }
};
var isPrime =function (T) {
  if(T == 1) {
    var result = false;
    return result;
  } // 1 - не простое число
	// перебираем возможные делители от 2 до sqrt(n)
	for(j = 2; j * j <= T; j++){
		// если разделилось нацело, то составное
		if(T % j == 0) {
      result = false;
      return result;
    }

	// если нет нетривиальных делителей, то простое
  else {
    result = true;
    return result;
  }
}
};
var getPrimePalindrome = function (N) {
  var currentValue = N;
  while (currentValue <= 100000) {
    currentValue++;
    if(isPrime(currentValue) === true && isPalindrome(currentValue) === true) {
      return currentValue;
    }
  }
};
