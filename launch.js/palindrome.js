function ispalindrome(x) {
    if (x < 0) return false;
    let str = x.toString();
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
let x = 121;
console.log(ispalindrome(x)); // Output true
// Example reads 121 from left to right and 121 from right to left which are the same
console.log(ispalindrome(x)); // Output true
x = -121;
console.log(ispalindrome(x)); // Output false
x = 10;
console.log(ispalindrome(x)); // Output false
x = 12321;
console.log(ispalindrome(x)); // Output true
// Additional test cases
x = 0;
console.log(ispalindrome(x)); // Output true
x = 1234321;
