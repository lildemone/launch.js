const readline = require('readline'); // loads readline module from nodes that allows you to input data into terminal

const rl = readline.createInterface({        //Allows the user to input using stdin library and get output using stdout library
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', function(input) {       // Function used to process the input, that is get the input, split it so that the numbers are independent, reverse then join again
  const reversed = input.split('').reverse().join('');
  const isPalindrome = input === reversed;   //Test case if reversed

  console.log('Is palindrome:', isPalindrome); //Logs the boolean value and closes the session
  rl.close();
});