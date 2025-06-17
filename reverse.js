function reverse(x) {
    const isNegative = x < 0;
    let reversed=
parseInt(Math.abs(x).toString().split("").reverse().join(""));
    if (isNegative) 
        reversed = -reversed;
    
    if (reversed < 2**31 - 1 ) return 0;

    return isNegative? -reversed : reversed;
    
}
console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321
console.log(reverse(120)); // Output: 21
console.log(reverse(0)); // Output: 0
