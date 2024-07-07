
//6.1//
// Create the function
function addNumbers(a, b) {
    return a + b;
}

//  Set up two different variables
let num1 = 10;
let num2 = 5;

// Use the function and output the result
let result1 = addNumbers(num1, num2);
console.log(`Result of adding ${num1} and ${num2} is:`, result1);

// Create a second call to the function
let num3 = -3;
let num4 = 7;

let result2 = addNumbers(num3, num4);
console.log(`Result of adding ${num3} and ${num4} is:`, result2);


// 6.2//

// Create an array of descriptive words
let descriptiveWords = ['beautiful', 'majestic', 'serene', 'glorious', 'charming'];

// Create a function that contains a prompt asking the user for a name
function generateRandomDescription() {
    let userName = prompt('Please enter your name:');
    return userName;
}

// Create a function to get a random word from the array
function getRandomWord(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Create a function to output the description
function outputDescription() {
    let userName = generateRandomDescription();
    let randomWord = getRandomWord(descriptiveWords);
    console.log(`Hello ${userName}! You are ${randomWord}.`);
}

// Invoke the function
outputDescription();



//6.3//

// Set up two variables containing number values
let num5 = 10;
let num6 = 5;

// Set up a variable to hold an operator, defaulting to 'add'
let operator = 'add'; 

// Create a function to calculate based on operator
function calculate(num5, num6, operation) {
    if (operation === 'subtract') {
        return num5 - num6;
    } else {
        // Default to addition if no valid operator specified
        return num5 + num6;
    }
}

// Output results using console.log()
console.log(`Result of ${num5} ${operator} ${num6}:`, calculate(num5, num6, operator));

//  Update operator to 'subtract' and call function again
operator = 'subtract';
console.log(`Result of ${num5} ${operator} ${num6}:`, calculate(num5, num6, operator));