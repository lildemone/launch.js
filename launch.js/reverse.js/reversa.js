function reverse(x) {
    const isNegative = x0;
    let reversed=
parseint(math.abs(x).string().tosplit("")).reverse().join("");
    if (isNegative) 
        reversed = -reversed;
    
    if (reversed < 2**31 - 1 ) return 0;

    return isNegative? -reversed : reversed;
    
}
console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321
console.log(reverse(120)); // Output: 21
console.log(reverse(0)); // Output: 0