function isPalindrome(x) {
    // Negative numbers are not palindromes
    if (x < 0) return false;

    // Convert the number to a string
    const str = x.toString();

    // Reverse the string and compare
    const reversed = str.split('').reverse().join('');

    return str === reversed;
}

// Test cases
console.log(isPalindrome(121));   // true
console.log(isPalindrome(-121));  // false
console.log(isPalindrome(10));    // false
