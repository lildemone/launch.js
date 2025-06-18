const readline = require('readline');

// Setup readline interface for terminal input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to reverse an integer and handle edge cases
function reverse(x) {
  const isNegative = x < 0;

  let reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')
  );

  if (reversed > 2 ** 31 - 1) return 0;

  return isNegative ? -reversed : reversed;
}

// Ask the user for input
rl.question('Enter a number to reverse: ', function(input) {
  const number = parseInt(input);

  // Check if valid number
  if (isNaN(number)) {
    console.log("That is not a valid number.");
  } else {
    const result = reverse(number);
    console.log("Reversed number:", result);
  }

  rl.close(); // End input
});
