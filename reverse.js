function reverse(x) {
<<<<<<< HEAD
    const isNegative = x < 0;  // Check if the number is negative
    let reversed = 
        parseInt(Math.abs(x).toString().split("").reverse().join(""));
=======
    const isNegative = x < 0;
    let reversed=
parseInt(Math.abs(x).toString().split("").reverse().join(""));
    if (isNegative) 
        reversed = -reversed;
    
    if (reversed < 2**31 - 1 ) return 0;
>>>>>>> 7aa52c3835c0eba3fa3b782116ce7d710a1e8398

    if (reversed > 2**31 - 1) return 0;  // Handle overflow

    return isNegative ? -reversed : reversed;  // Add negative sign back if needed
}

console.log(reverse(123));   // 321
console.log(reverse(-123));  // -321
console.log(reverse(120));   // 21
console.log(reverse(0));     // 0
