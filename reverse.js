function reverse(x) {
    const isNegative = x < 0;  // Check if the number is negative
    let reversed = 
        parseInt(Math.abs(x).toString().split("").reverse().join(""));

    if (reversed > 2**31 - 1) return 0;  // Handle overflow

    return isNegative ? -reversed : reversed;  // Add negative sign back if needed
}

console.log(reverse(123));   // 321
console.log(reverse(-123));  // -321
console.log(reverse(120));   // 21
console.log(reverse(0));     // 0
